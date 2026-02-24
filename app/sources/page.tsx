import { BookOpen, Plane, Globe, Cpu, ShieldCheck, Newspaper, Briefcase, Database, Search, ShoppingBag, Luggage, BarChart } from "lucide-react";
import React from "react";

const sourcesData = [
    {
        category: "Havalimanı İşletme ve Yönetim",
        icon: <Globe className="w-5 h-5" />,
        items: [
            "TAV Airports", "Fraport", "Groupe ADP", "VINCI Airports", "GMR Airports",
            "Changi Airport Group", "MAG", "Copenhagen Airports (CPH)", "AENA",
            "Airports of Thailand (AOT)", "Royal Schiphol Group", "Heathrow Airport (LHR)",
            "Dubai Airports (DXB)", "Incheon International Airport (ICN)"
        ]
    },
    {
        category: "Yolcu Teknolojileri, IT ve Biyometri",
        icon: <Cpu className="w-5 h-5" />,
        items: [
            "SITA", "Amadeus", "Collins Aerospace", "IDEMIA", "NEC", "Thales Group",
            "Damarel", "Inform (GroundStar)", "ADB SAFEGATE", "Airport Labs",
            "Vision-Box", "Gunnebo"
        ]
    },
    {
        category: "Operasyon Analitiği, RMS/FMS ve Yapay Zeka",
        icon: <BarChart className="w-5 h-5" />,
        items: [
            "Veovo", "Xovis", "Irisys", "Lelystad / Outsight", "RIMOWA / Materna IPS",
            "Assaia", "AeroCloud", "Searidge Technologies", "Brock Solutions"
        ]
    },
    {
        category: "Yer Hizmetleri ve Kargo",
        icon: <ShieldCheck className="w-5 h-5" />,
        items: [
            "Swissport", "Menzies Aviation", "Dnata", "Worldwide Flight Services (WFS)",
            "Çelebi Ground Handling", "Viggo"
        ]
    },
    {
        category: "Premium Yolcu Hizmetleri ve Lounge",
        icon: <Briefcase className="w-5 h-5" />,
        items: [
            "PrimeClass", "DragonPass", "Plaza Premium Group", "LoungeKey",
            "Priority Pass", "No1 Lounges", "Servisair / Swissport Lounges"
        ]
    },
    {
        category: "Havacılık Verisi ve İstihbarat",
        icon: <Database className="w-5 h-5" />,
        items: ["Cirium", "OAG"]
    },
    {
        category: "Bagaj Otomasyonu ve Lojistik",
        icon: <Luggage className="w-5 h-5" />,
        items: ["Vanderlande", "BEUMER Group", "Siemens Logistics", "Leonardo"]
    },
    {
        category: "Güvenlik ve Tarama Sistemleri",
        icon: <Search className="w-5 h-5" />,
        items: ["Smiths Detection", "Analogic / L3Harris", "Rohde & Schwarz"]
    },
    {
        category: "Havalimanı Perakende & Ticari Gelirler",
        icon: <ShoppingBag className="w-5 h-5" />,
        items: ["Avolta", "SSP Group"]
    },
    {
        category: "Sektörel Medya ve Yayınlar",
        icon: <Newspaper className="w-5 h-5" />,
        items: [
            "The Moodie Davitt Report", "Airport Technology", "Aviation Week",
            "Runway Girl Network", "Business Travel News (BTN)",
            "Future Travel Experience (FTE)", "AirportWorld", "ch-aviation"
        ]
    },
    {
        category: "Organizasyonlar ve Birlikler",
        icon: <Plane className="w-5 h-5" />,
        items: ["ACI World", "IATA", "SITA IT Insights"]
    },
    {
        category: "Finans, Yatırım ve Kurumsal Takip",
        icon: <BarChart className="w-5 h-5" />,
        items: ["Crunchbase", "PitchBook", "Bloomberg Terminal", "Reuters", "Dealroom"]
    }
];

export default function SourcesPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-aviation-navy text-white py-24 px-6 relative overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex items-center gap-3 text-aviation-accent mb-6">
                        <BookOpen className="w-6 h-6" />
                        <span className="text-sm font-bold uppercase tracking-[0.3em]">Kütüphane</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic">
                        Bülten <span className="text-aviation-accent italic">Kaynaklarımız</span>
                    </h1>
                    <p className="text-aviation-silver text-xl md:text-2xl max-w-3xl leading-relaxed font-light">
                        Sektörün nabzını tutmak için her gün taradığımız <span className="text-white font-bold italic">100'den fazla</span> global havacılık ve teknoloji kaynağı.
                    </p>
                </div>
                {/* Abstract Background Element */}
                <div className="absolute -bottom-24 -right-24 w-96 h-96 opacity-10">
                    <Plane className="w-full h-full -rotate-45" />
                </div>
            </section>

            {/* Grid Section */}
            <div className="max-w-7xl mx-auto py-20 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sourcesData.map((category, idx) => (
                        <div
                            key={idx}
                            className="group bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:border-aviation-accent/30 transition-all duration-500 flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-aviation-navy text-aviation-accent rounded-xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </div>
                                <h2 className="text-lg font-bold text-aviation-navy leading-tight tracking-tight">
                                    {category.category}
                                </h2>
                            </div>

                            <ul className="space-y-3 flex-1">
                                {category.items.map((item, itemIdx) => (
                                    <li
                                        key={itemIdx}
                                        className="flex items-center gap-3 text-slate-500 group-hover:text-slate-700 transition-colors"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-aviation-accent/40 group-hover:bg-aviation-accent" />
                                        <span className="text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Footer Info */}
                <footer className="mt-32 text-center border-t border-slate-100 pt-16 pb-20">
                    <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
                        Kaynak listemiz sektördeki gelişmelere paralel olarak sürekli güncellenmektedir.
                        Eksik olduğunu düşündüğünüz kritik bir kaynak varsa lütfen editör ekibimizle iletişime geçin.
                    </p>
                </footer>
            </div>
        </div>
    );
}
