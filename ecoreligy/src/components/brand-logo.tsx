type BrandLogoProps = {
  size?: 'sm' | 'md' | 'lg'
  symbolOnly?: boolean
  className?: string
  label?: string
}

const sizes = {
  sm: 'size-8 sm:size-9',
  md: 'size-9 sm:size-10',
  lg: 'size-14 sm:size-16',
}

export function BrandLogo({ size = 'md', symbolOnly = false, className = '', label = 'EcoReligi Wali Songo' }: BrandLogoProps) {
  return <span className={`brand-logo inline-flex shrink-0 items-center gap-2.5 ${className}`}>
    <img src="/assets/branding/ecoreligi-mark.png" alt={symbolOnly ? label : ''} aria-hidden={symbolOnly ? undefined : true} width="512" height="512" className={`${sizes[size]} brand-logo-image object-contain`} />
    {!symbolOnly && <span className="flex flex-col font-display leading-[.9]"><span className="text-lg font-semibold tracking-tight">EcoReligi</span><span className="mt-1 text-[10px] tracking-[.15em] opacity-70">WALI SONGO</span></span>}
  </span>
}
