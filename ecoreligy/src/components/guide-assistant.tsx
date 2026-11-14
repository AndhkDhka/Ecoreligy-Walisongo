import * as React from 'react'
import { Bot, CornerDownLeft, LoaderCircle, MessageCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useApp } from '@/lib/app-context'

type Entry = { name?: string; keywords?: string[]; summary?: Record<string, string>; details?: Record<string, string>; facts?: Record<string, string[]>; sources?: { title?: string; url?: string }[] }
const knowledgeFiles = ['faq', 'history', 'culture', 'tourism', 'events', 'culinary', 'umkm']

export function GuideAssistant() {
  const { language } = useApp()
  const [open, setOpen] = React.useState(false)
  const [question, setQuestion] = React.useState('')
  const [answer, setAnswer] = React.useState('')
  const [sources, setSources] = React.useState<Entry['sources']>([])
  const [loading, setLoading] = React.useState(false)
  const t = (en: string, id: string) => language === 'id' ? id : en

  const ask = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const prompt = question.trim().toLowerCase()
    if (!prompt) return
    setLoading(true)
    try {
      const collections = await Promise.all(knowledgeFiles.map(async (file) => {
        const response = await fetch(`/assets/data/knowledge/${file}.json`)
        if (!response.ok) return [] as Entry[]
        const data = await response.json() as Entry[]
        return Array.isArray(data) ? data : []
      }))
      const terms = prompt.split(/[^\p{L}\p{N}]+/u).filter((term) => term.length > 2)
      const ranked = collections.flat().map((entry) => {
        const haystack = [entry.name, ...(entry.keywords || [])].filter(Boolean).join(' ').toLowerCase()
        const score = (entry.keywords || []).reduce((total, keyword) => total + (prompt.includes(keyword.toLowerCase()) ? 4 : 0), 0)
          + terms.reduce((total, term) => total + (haystack.includes(term) ? 1 : 0), 0)
        return { entry, score }
      }).filter((item) => item.score > 0).sort((a, b) => b.score - a.score)
      const best = ranked.at(0)?.entry
      const localized = (value?: Record<string, string>) => value?.[language] || value?.id || value?.en || ''
      const summary = localized(best?.summary) || localized(best?.details) || best?.facts?.[language]?.join(' ') || ''
      if (!summary) {
        setAnswer(t('I could not find a reliable answer in the local guide. Check the destination profile or an official local source.', 'Panduan lokal belum memiliki jawaban yang dapat dipastikan. Periksa profil destinasi atau sumber resmi setempat.'))
        setSources([])
      } else {
        setAnswer(summary)
        setSources(best?.sources || [])
      }
    } catch {
      setAnswer(t('The local guide could not be loaded. Please try again when the site assets are available.', 'Panduan lokal tidak dapat dimuat. Coba lagi saat data situs tersedia.'))
      setSources([])
    } finally { setLoading(false) }
  }

  return <>
    <Button onClick={() => setOpen(true)} variant="default" size="icon" className="fixed bottom-20 right-4 z-40 size-12 rounded-full shadow-xl md:bottom-5 md:right-5 md:size-14" aria-label={t('Open local heritage guide', 'Buka panduan warisan lokal')}><MessageCircle className="size-5" /></Button>
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bottom-4 left-auto right-4 top-auto max-h-[min(78vh,680px)] w-[min(94vw,420px)] translate-x-0 translate-y-0 rounded-3xl p-0 sm:bottom-6 sm:right-6">
        <div className="rounded-t-3xl bg-[#344C3B] p-5 pr-14 text-white"><div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-full bg-white/10"><Bot className="size-5 text-[#C6A76B]" /></span><div><DialogTitle className="font-display text-lg">{t('EcoReligi Guide', 'Panduan EcoReligi')}</DialogTitle><DialogDescription className="text-xs text-white/70">{t('Answers from this site’s local knowledge base', 'Jawaban dari basis pengetahuan lokal situs')}</DialogDescription></div></div></div>
        <div className="max-h-[48vh] space-y-4 overflow-y-auto p-5">
          {!answer && <div><p className="text-sm leading-6 text-muted-foreground">{t('Ask about Wali Songo history, destinations, local food, or cultural traditions. The guide does not use live data.', 'Tanyakan sejarah Wali Songo, destinasi, kuliner lokal, atau tradisi budaya. Panduan ini tidak menggunakan data langsung.')}</p><div className="mt-4 flex flex-wrap gap-2">{[t('Who were the Wali Songo?', 'Siapa Wali Songo?'), t('What is Buka Luwur?', 'Apa itu Buka Luwur?')].map((sample) => <button key={sample} onClick={() => setQuestion(sample)} className="min-h-10 rounded-full border border-border px-3 text-xs hover:bg-secondary">{sample}</button>)}</div></div>}
          {question && <div className="ml-auto max-w-[88%] rounded-2xl rounded-br-sm bg-primary px-4 py-3 text-sm text-primary-foreground">{question}</div>}
          {answer && <div className="max-w-[94%] rounded-2xl rounded-bl-sm bg-secondary/75 px-4 py-3 text-sm leading-6">{answer}{sources && sources.length > 0 && <div className="mt-3 border-t border-border pt-2 text-xs">{sources.slice(0, 3).map((source, index) => source.url ? <a className="mr-2 inline-block font-semibold text-primary underline" key={`${source.url}-${index}`} href={source.url} target="_blank" rel="noreferrer">{source.title || t('Source', 'Sumber')} ↗</a> : null)}</div>}</div>}
        </div>
        <form onSubmit={ask} className="flex gap-2 border-t border-border p-4"><label className="sr-only" htmlFor="guide-prompt">{t('Ask the guide', 'Tanya panduan')}</label><Input id="guide-prompt" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder={t('Ask about Java heritage…', 'Tanyakan warisan Jawa…')} disabled={loading} /><Button size="icon" aria-label={t('Send question', 'Kirim pertanyaan')} disabled={loading || !question.trim()}>{loading ? <LoaderCircle className="animate-spin" /> : <Send />}</Button></form>
        <p className="flex items-center justify-center gap-1 pb-3 text-[10px] text-muted-foreground"><CornerDownLeft className="size-3" />{t('Answers use local reference files, not live updates.', 'Jawaban bersumber dari berkas lokal, bukan pembaruan langsung.')}</p>
      </DialogContent>
    </Dialog>
  </>
}
