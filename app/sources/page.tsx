import { BookOpen, ShieldCheck, Cpu, Globe, Newspaper, Plane } from "lucide-react";

const categories = [
    {
        title: "Havalimanı İşletme & Yönetim",
        icon: <Globe className="w-6 h-6" />,
        items: [
            { name: "ACI World - Airports Council International", url: "#" },
            { name: "IATA Airport Operations Hub", url: "#" },
            { name: "Eurocontrol Operations Portal", url: "#" },
        ]
    },
    {
        title: "Teknoloji & Biyometri",
        icon: <Cpu className="w-6 h-6" />,
        items: [
            { name: "SITA - Air Transport IT Insights", url: "#" },
            { name: "Biometrics Institute Resources", url: "#" },
            { name: "Airport Technology Research", url: "#" },
        ]
    },
    {
        title: "Yer Hizmetleri & Lojistik",
        icon: <ShieldCheck className="w-6 h-6" />,
        items: [
            { name: "ASA - Airport Services Association", url: "#" },
            { name: "IATA Ground Operations Manual (IGOM)", url: "#" },
            { name: "Ground Handling International", url: "#" },
        ]
    },
    {
        title: "Medya & Haber Kaynakları",
        icon: <Newspaper className="w-6 h-6" />,
        items: [
            { name: "The Moodie Davitt Report", url: "#" },
            { name: "FlightGlobal Air Transport News", url: "#" },
            { name: "Airport World Magazine", url: "#" },
        ]
    }
];

export default function SourcesPage() {
    return (
        <div className="bg-aviation-white/30 min-h-screen py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <header className="mb-20 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-aviation-navy text-aviation-accent rounded-2xl mb-6 shadow-xl">
                        <BookOpen className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-black text-aviation-navy mb-4 tracking-tight">SEKTÖREL KAYNAKLAR</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Havacılık ve havalimanı ekosistemine dair en güvenilir, güncel ve akademik kaynakların toplandığı kurumsal kütüphane.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {categories.map((category, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-aviation-white text-aviation-navy rounded-xl group-hover:bg-aviation-navy group-hover:text-white transition-colors duration-300">
                                    {category.icon}
                                </div>
                                <h2 className="text-xl font-bold text-aviation-navy tracking-tight">{category.title}</h2>
                            </div>
                            <ul className="space-y-4">
                                {category.items.map((item, itemIdx) => (
                                    <li key={itemIdx}>
                                        <a
                                            href={item.url}
                                            className="flex items-center justify-between p-4 rounded-xl bg-slate-50 text-slate-600 hover:bg-aviation-navy hover:text-white transition-all font-medium"
                                        >
                                            {item.name}
                                            <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">İncele</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <section className="bg-aviation-navy text-white p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl">
                        <h3 className="text-3xl font-bold mb-6 italic tracking-tighter">İşbirliği ve Kaynak Paylaşımı</h3>
                        <p className="text-aviation-silver text-lg leading-relaxed mb-8">
                            Kütüphanemize eklenmesini istediğiniz veya sektör için değerli gördüğünüz kaynakları bizimle paylaşabilirsiniz.
                        </p>
                        <button className="bg-aviation-accent text-aviation-navy px-8 py-4 rounded-xl font-black uppercase text-sm tracking-widest hover:scale-105 transition-transform">
                            Bize Ulaşın
                        </button>
                    </div>
                    <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 flex items-center justify-center">
                        <Plane className="w-64 h-64 -rotate-45" />
                    </div>
                </section>
            </div>
        </div>
    )
}
