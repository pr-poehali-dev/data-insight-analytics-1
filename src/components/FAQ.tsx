import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Сколько стоит кухня на заказ?",
    answer:
      "Стоимость зависит от размеров, выбранных материалов и фурнитуры. Средняя кухня обходится от 150 000 рублей. Точную цену рассчитаем после замера — выезд замерщика бесплатный.",
  },
  {
    question: "Какие сроки изготовления?",
    answer:
      "Стандартный срок производства — от 14 до 30 рабочих дней в зависимости от сложности проекта. Точные сроки фиксируем в договоре после утверждения дизайн-проекта.",
  },
  {
    question: "Какие материалы вы используете?",
    answer:
      "Работаем с ЛДСП, МДФ, массивом дерева, акрилом и пластиком. Фурнитура — Blum, Hettich, GTV. Столешницы — искусственный камень, кварц, постформинг. Все материалы сертифицированы.",
  },
  {
    question: "Вы делаете 3D-проект кухни?",
    answer:
      "Да, после замера дизайнер создаёт 3D-визуализацию вашей кухни бесплатно. Вы увидите, как будет выглядеть готовый результат, и сможете внести любые правки до запуска в производство.",
  },
  {
    question: "Входит ли доставка и установка в стоимость?",
    answer:
      "Доставка по городу и монтаж входят в стоимость заказа. Наши мастера устанавливают кухню, подключают встроенную технику и проверяют работу всех механизмов.",
  },
  {
    question: "Какая гарантия на кухню?",
    answer:
      "Мы даём гарантию 2 года на мебель и 5 лет на фурнитуру. В гарантийный период бесплатно устраняем любые производственные дефекты. После гарантии — сервисное обслуживание по выгодным ценам.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}