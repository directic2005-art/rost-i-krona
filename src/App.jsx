import { useState } from 'react'
import {
  Leaf,
  TreePine,
  Flower2,
  Sprout,
  Sun,
  Droplets,
  Shield,
  Clock,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Star,
  CheckCircle,
  Instagram,
  Facebook,
  Send,
} from 'lucide-react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'О нас', href: '#about' },
    { label: 'Услуги', href: '#services' },
    { label: 'Работы', href: '#works' },
    { label: 'Цены', href: '#prices' },
    { label: 'Контакты', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-green-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-shadow">
              <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
              Рост и Крона
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-xl hover:from-green-600 hover:to-green-700 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all"
            >
              Заказать
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-green-50 transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-green-100/50">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-gray-600 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-5 py-3 text-center text-base font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg"
            >
              Заказать
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-green-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-100/20 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + i * 15}%`,
              animation: `float ${6 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          >
            <Leaf className="w-8 h-8 text-green-600" />
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-0 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100/80 rounded-full border border-green-200/50">
              <Sprout className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Профессиональное озеленение</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
              <span className="text-gray-900">Создаём </span>
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                зелёные
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
                пространства
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Превращаем ваши территории в ухоженные зелёные зоны. Озеленение, высадка деревьев и растений с гарантией качества.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-2xl hover:from-green-600 hover:to-green-700 shadow-xl shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                Заказать проект
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-green-700 bg-green-100/80 border border-green-200 rounded-2xl hover:bg-green-200/80 transition-all duration-300 hover:-translate-y-0.5"
              >
                Наши услуги
              </a>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-500">Проектов</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">8</div>
                <div className="text-sm text-gray-500">Лет опыта</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-500">Довольных клиентов</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-[3rem] rotate-6 opacity-20 blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}images/hero-garden.svg`}
                  alt="Ухоженный зелёный газон"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/30 rounded-xl flex items-center justify-center">
                        <Flower2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Дизайн-проект</div>
                        <div className="text-xs text-white/80">Бесплатная консультация</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
    </section>
  )
}

function About() {
  const advantages = [
    {
      icon: Shield,
      title: 'Гарантия растений',
      desc: 'Замена погибших растений за наш счёт в течение года после высадки.',
      gradient: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: Clock,
      title: 'Точные сроки',
      desc: 'Работаем по фиксированному графику. Сдаём проекты точно в срок.',
      gradient: 'from-amber-500 to-orange-500',
      bg: 'bg-amber-50',
    },
    {
      icon: Sun,
      title: 'Индивидуальный подход',
      desc: 'Каждый проект разрабатывается с учётом особенностей вашей территории.',
      gradient: 'from-green-500 to-emerald-500',
      bg: 'bg-green-50',
    },
    {
      icon: Droplets,
      title: 'Системы полива',
      desc: 'Проектируем и устанавливаем автоматические системы орошения.',
      gradient: 'from-cyan-500 to-blue-500',
      bg: 'bg-cyan-50',
    },
    {
      icon: Sprout,
      title: 'Собственный питомник',
      desc: 'Качественный посадочный материал выращивается в нашем питомнике.',
      gradient: 'from-emerald-500 to-green-600',
      bg: 'bg-emerald-50',
    },
    {
      icon: Star,
      title: 'Полный цикл услуг',
      desc: 'От проекта до регулярного обслуживания — всё в одних руках.',
      gradient: 'from-violet-500 to-purple-600',
      bg: 'bg-violet-50',
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100/80 rounded-full border border-green-200/50 mb-6">
            <Leaf className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">Почему мы</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Преимущества работы
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent"> с нами</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Мы не просто сажаем растения — мы создаём экосистемы, которые радуют глаз на протяжении многих лет.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="group relative p-6 lg:p-8 rounded-3xl bg-white border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-xl hover:shadow-green-100/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-7 h-7" style={{ color: item.gradient.includes('green') ? '#22c55e' : item.gradient.includes('blue') ? '#3b82f6' : item.gradient.includes('amber') ? '#f59e0b' : item.gradient.includes('cyan') ? '#06b6d4' : item.gradient.includes('emerald') ? '#10b981' : '#8b5cf6' }} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    {
      icon: TreePine,
      title: 'Высадка деревьев',
      desc: 'Подбор, доставка и посадка саженцев любых пород с полным комплексом агротехнических работ.',
      features: ['Более 50 пород', 'Гарантия приживаемости', 'Уход 1 год'],
    },
    {
      icon: Flower2,
      title: 'Цветники и клумбы',
      desc: 'Проектирование и обустройство цветочных композиций для любого сезона.',
      features: ['Многолетники и однолетники', 'Сезонная смена', 'Автополив'],
    },
    {
      icon: Sprout,
      title: 'Газоны',
      desc: 'Устройство рулонных и посевных газонов с подготовкой грунта и дренажом.',
      features: ['Рулонные и посевные', 'Дренаж и плодородие', 'Уход и стрижка'],
    },
    {
      icon: Droplets,
      title: 'Системы полива',
      desc: 'Проектирование и монтаж автоматических систем капельного и дождевого полива.',
      features: ['Автоматика', 'Экономия воды', 'Датчики влажности'],
    },
    {
      icon: Sun,
      title: 'Декоративное освещение',
      desc: 'Подсветка дорожек, деревьев и архитектурных элементов для вечернего уюта.',
      features: ['LED-технологии', 'Беспроводное управление', 'Энергосбережение'],
    },
    {
      icon: Shield,
      title: 'Обслуживание территорий',
      desc: 'Регулярный уход за зелёными насаждениями: стрижка, подкормка, обрезка, борьба с вредителями.',
      features: ['Ежемесячное обслуживание', 'Сезонные работы', 'Гибкий график'],
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100/80 rounded-full border border-green-200/50 mb-6">
            <Sprout className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">Что мы делаем</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Наши
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent"> услуги</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Полный спектр работ по озеленению — от проектирования до регулярного обслуживания.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-white rounded-3xl border border-gray-100 hover:border-green-200 p-6 lg:p-8 shadow-sm hover:shadow-xl hover:shadow-green-100/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/20 group-hover:shadow-green-500/30 transition-shadow">
                <s.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const img = (name) => `${import.meta.env.BASE_URL}images/${name}`
  const works = [
    {
      img: img('work-flower-garden.webp'),
      title: 'Цветущий сад',
      desc: 'Ландшафтный дизайн частного участка, 1200 м²',
    },
    {
      img: img('work-lawn.webp'),
      title: 'Зелёный газон',
      desc: 'Рулонный газон и автополив, коттеджный посёлок',
    },
    {
      img: img('work-nursery.webp'),
      title: 'Питомник растений',
      desc: 'Подбор и высадка декоративных культур',
    },
    {
      img: img('work-courtyard.webp'),
      title: 'Дворовая территория',
      desc: 'Озеленение жилого комплекса, 3 000 м²',
    },
    {
      img: img('work-homestead.webp'),
      title: 'Приусадебный участок',
      desc: 'Хвойные композиции и альпийские горки',
    },
    {
      img: img('work-flowerbed.webp'),
      title: 'Клумбы и цветники',
      desc: 'Обустройство цветочных композиций',
    },
  ]

  return (
    <section id="works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100/80 rounded-full border border-green-200/50 mb-6">
            <TreePine className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">Портфолио</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Наши
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent"> работы</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Реальные проекты по озеленению — от частных садов до территорий жилых комплексов.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {works.map((w) => (
            <div
              key={w.title}
              className="group relative rounded-3xl overflow-hidden bg-green-50 aspect-[4/3] shadow-sm hover:shadow-xl hover:shadow-green-100/50 transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={w.img}
                alt={w.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-green-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-1">{w.title}</h3>
                <p className="text-sm text-green-100/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {w.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Prices() {
  const packages = [
    {
      name: 'Старт',
      price: '45 000',
      desc: 'Для небольших участков',
      features: [
        'Дизайн-проект участка до 10 соток',
        'Высадка до 10 деревьев',
        'Рулонный газон до 500 м²',
        'Базовый полив',
        'Уход 3 месяца',
      ],
      popular: false,
      gradient: 'from-gray-100 to-gray-50',
      border: 'border-gray-200',
      btn: 'bg-gray-900 hover:bg-gray-800 text-white',
    },
    {
      name: 'Комфорт',
      price: '120 000',
      desc: 'Оптимальный выбор',
      features: [
        'Дизайн-проект участка до 30 соток',
        'Высадка до 30 деревьев',
        'Цветники и клумбы',
        'Рулонный газон до 1500 м²',
        'Система автополива',
        'Декоративная подсветка',
        'Уход 6 месяцев',
      ],
      popular: true,
      gradient: 'from-green-500 to-emerald-500',
      border: 'border-green-200',
      btn: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg shadow-green-500/25',
    },
    {
      name: 'Премиум',
      price: 'от 300 000',
      desc: 'Комплексное решение',
      features: [
        'Индивидуальный дизайн любой сложности',
        'Неограниченное количество растений',
        'Эксклюзивные породы деревьев',
        'Каскадные цветники',
        'Полная автоматизация полива',
        'Декоративное освещение',
        'Зона отдыха и мощение',
        'Обслуживание 12 месяцев',
      ],
      popular: false,
      gradient: 'from-amber-500 to-orange-500',
      border: 'border-amber-200',
      btn: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg shadow-amber-500/25',
    },
  ]

  return (
    <section id="prices" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100/80 rounded-full border border-green-200/50 mb-6">
            <Star className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">Тарифы</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Прозрачные
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent"> цены</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Выберите подходящий тариф или закажите индивидуальный расчёт под ваш проект.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col bg-gradient-to-b ${pkg.gradient} rounded-3xl border-2 ${pkg.border} p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 ${
                pkg.popular ? 'shadow-xl shadow-green-100/50 ring-1 ring-green-200 md:-mt-4 md:mb-[-16px]' : 'shadow-sm hover:shadow-lg'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg shadow-green-500/30 uppercase tracking-wider">
                  Популярный
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{pkg.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-gray-900">{pkg.price}</span>
                  <span className="text-sm text-gray-500"> руб.</span>
                </div>
              </div>
              <ul className="flex-1 space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center px-6 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 ${pkg.btn}`}
              >
                Выбрать тариф
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">Нужно что-то другое? Мы составим индивидуальное предложение.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-green-700 bg-green-100/80 border border-green-200 rounded-xl hover:bg-green-200/80 transition-all"
          >
            Получить расчёт
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '8ecdf599-c6a2-457a-bfab-5ae7bcc72e3a',
          ...formData,
        }),
      })
      if (res.ok) {
        setSubmitted(true)
        setFormData({ name: '', phone: '', email: '', message: '' })
      }
    } catch {}
    setSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100/80 rounded-full border border-green-200/50 mb-6">
              <Send className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Связаться с нами</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Оставьте
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent"> заявку</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-10">
              Заполните форму, и мы свяжемся с вами в течение 30 минут для бесплатной консультации по вашему проекту.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Телефон</div>
                  <a href="tel:+79221883052" className="text-lg font-semibold text-gray-900 hover:text-green-600 transition-colors">
                    +7 (922) 188-30-52
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <a href="mailto:info@rost-krona.ru" className="text-lg font-semibold text-gray-900 hover:text-green-600 transition-colors">
                    info@rost-krona.ru
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Адрес</div>
                  <div className="text-lg font-semibold text-gray-900">Екатеринбург, ул. Московская, д. 55</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 p-6 lg:p-8 shadow-lg shadow-gray-100/50">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
                <p className="text-gray-500">Мы перезвоним вам в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Ваше имя</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Телефон</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="mail@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Сообщение</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Расскажите о вашем проекте..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-gray-900 placeholder-gray-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Отправка...' : 'Отправить заявку'}
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const navLinks = [
    { label: 'О нас', href: '#about' },
    { label: 'Услуги', href: '#services' },
    { label: 'Цены', href: '#prices' },
    { label: 'Контакты', href: '#contact' },
  ]

  const serviceLinks = [
    'Высадка деревьев',
    'Цветники и клумбы',
    'Газоны',
    'Системы полива',
    'Декоративное освещение',
    'Обслуживание',
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Рост и Крона</span>
            </a>
            <p className="text-sm leading-relaxed text-gray-400 mb-6 max-w-xs">
              Профессиональное озеленение территорий любой сложности. Превращаем ваши идеи в зелёную реальность.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-xl flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-xl flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-xl flex items-center justify-center transition-colors">
                <Send className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Навигация</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-green-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Услуги</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm hover:text-green-400 transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-green-400 shrink-0" />
                <a href="tel:+79221883052" className="text-sm hover:text-green-400 transition-colors">
                  +7 (922) 188-30-52
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-green-400 shrink-0" />
                <a href="mailto:info@rost-krona.ru" className="text-sm hover:text-green-400 transition-colors">
                  info@rost-krona.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                <span className="text-sm">Екатеринбург, ул. Московская, д. 55</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">&copy; 2024 Рост и Крона. Все права защищены.</p>
          <p className="text-sm text-gray-500">Сделано с любовью к зелени</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Prices />
      <Contact />
      <Footer />
    </div>
  )
}
