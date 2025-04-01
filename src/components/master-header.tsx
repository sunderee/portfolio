interface MasterHeaderProps {
    title: string;
    subtitle?: string;
}

export default function MasterHeader({ title, subtitle }: MasterHeaderProps) {
    return <div className="mt-12 mb-10 flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-center">{title}</h1>
        {subtitle && <p className="text-lg text-muted-foreground text-center">{subtitle}</p>}
    </div>
}