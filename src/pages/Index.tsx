import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">ЮрКонсалт</div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground hover:text-accent transition-colors">Главная</a>
            <a href="#benefits" className="text-foreground hover:text-accent transition-colors">Преимущества</a>
            <a href="#services" className="text-foreground hover:text-accent transition-colors">Услуги</a>
            <a href="#reviews" className="text-foreground hover:text-accent transition-colors">Отзывы</a>
            <a href="#prices" className="text-foreground hover:text-accent transition-colors">Цены</a>
            <a href="#contacts" className="text-foreground hover:text-accent transition-colors">Контакты</a>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Консультация
          </Button>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90 z-0"></div>
          <img 
            src="https://cdn.poehali.dev/projects/e7b2f9ef-d245-4c99-ab2f-f02a630efdf5/files/b0c56bcc-2ffa-40fc-9932-45e8c5f8a0f2.jpg" 
            alt="Legal services" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
          />
          <div className="container mx-auto px-4 z-10 relative">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Профессиональная<br />
                <span className="text-accent">юридическая</span> защита
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Защитим ваши права и интересы. Более 15 лет успешной практики в сложных делах.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                  Наши услуги
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center text-primary mb-16 animate-fade-in">
              Почему выбирают нас
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "Scale", title: "15+ лет опыта", desc: "Решили более 1000 успешных дел в различных областях права" },
                { icon: "Shield", title: "98% выигранных дел", desc: "Высокая статистика побед благодаря глубокой экспертизе" },
                { icon: "Users", title: "500+ довольных клиентов", desc: "Индивидуальный подход к каждому клиенту и делу" },
                { icon: "Clock", title: "24/7 поддержка", desc: "Всегда на связи в критических ситуациях" },
                { icon: "Award", title: "Лицензии и сертификаты", desc: "Подтвержденная квалификация всех специалистов" },
                { icon: "Target", title: "Прозрачность работы", desc: "Понятные условия и отчетность на каждом этапе" }
              ].map((benefit, index) => (
                <Card key={index} className="hover-scale border-none shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8 text-center">
                    <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon name={benefit.icon} size={40} className="text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center text-primary mb-16 animate-fade-in">
              Наши услуги
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "Briefcase", title: "Корпоративное право", desc: "Регистрация бизнеса, договоры, сопровождение сделок" },
                { icon: "Home", title: "Семейное право", desc: "Разводы, алименты, раздел имущества, опека" },
                { icon: "Building", title: "Недвижимость", desc: "Сделки с недвижимостью, оформление прав собственности" },
                { icon: "Gavel", title: "Уголовное право", desc: "Защита в суде, обжалование приговоров" },
                { icon: "FileText", title: "Гражданское право", desc: "Споры по договорам, взыскание долгов, наследство" },
                { icon: "TrendingUp", title: "Налоговое право", desc: "Налоговые споры, оптимизация, консультации" }
              ].map((service, index) => (
                <Card key={index} className="group hover-scale border-2 hover:border-accent transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="bg-primary/5 group-hover:bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors">
                      <Icon name={service.icon} size={32} className="text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                    <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                      Подробнее →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center text-primary mb-16 animate-fade-in">
              Отзывы клиентов
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Анна Петрова", role: "Владелец бизнеса", text: "Помогли выиграть сложный корпоративный спор. Профессионализм на высшем уровне!" },
                { name: "Михаил Сидоров", role: "Частное лицо", text: "Быстро и качественно решили мой семейный вопрос. Спасибо за чуткость и понимание." },
                { name: "Елена Иванова", role: "Предприниматель", text: "Сопровождали сделку с недвижимостью. Все прошло гладко, без неожиданностей." }
              ].map((review, index) => (
                <Card key={index} className="border-none shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic leading-relaxed">"{review.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                        <Icon name="User" size={24} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-bold text-primary">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="prices" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center text-primary mb-16 animate-fade-in">
              Тарифы
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { 
                  name: "Консультация", 
                  price: "от 3 000 ₽", 
                  features: ["Первичная консультация", "Анализ документов", "Рекомендации", "1 час времени"] 
                },
                { 
                  name: "Сопровождение", 
                  price: "от 50 000 ₽", 
                  features: ["Полное ведение дела", "Подготовка документов", "Представительство в суде", "До 3 заседаний"],
                  popular: true
                },
                { 
                  name: "Абонемент", 
                  price: "от 100 000 ₽/мес", 
                  features: ["Постоянная поддержка", "Неограниченные консультации", "Приоритет в работе", "Персональный юрист"] 
                }
              ].map((plan, index) => (
                <Card key={index} className={`hover-scale ${plan.popular ? 'border-accent border-2 shadow-2xl' : 'border-border'}`}>
                  {plan.popular && (
                    <div className="bg-accent text-accent-foreground text-center py-2 font-bold rounded-t-lg">
                      Популярный
                    </div>
                  )}
                  <CardContent className="p-8 text-center">
                    <h3 className="text-3xl font-bold text-primary mb-4">{plan.name}</h3>
                    <div className="text-5xl font-bold text-accent mb-8">{plan.price}</div>
                    <ul className="space-y-4 mb-8 text-left">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${plan.popular ? 'bg-accent hover:bg-accent/90' : 'bg-primary hover:bg-primary/90'}`}>
                      Выбрать тариф
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="animate-slide-in-left">
                <h2 className="text-5xl font-bold mb-8">Свяжитесь с нами</h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Получите бесплатную консультацию по вашему вопросу
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-accent mt-1" />
                    <div>
                      <p className="font-bold mb-1">Телефон</p>
                      <p className="text-white/80">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={24} className="text-accent mt-1" />
                    <div>
                      <p className="font-bold mb-1">Email</p>
                      <p className="text-white/80">info@jurconsult.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-accent mt-1" />
                    <div>
                      <p className="font-bold mb-1">Адрес</p>
                      <p className="text-white/80">г. Москва, ул. Примерная, д. 10</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="animate-slide-in-right border-none shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Форма обратной связи</h3>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" className="bg-secondary" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" className="bg-secondary" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" className="bg-secondary" />
                    </div>
                    <div>
                      <Textarea placeholder="Опишите ваш вопрос" className="bg-secondary min-h-32" />
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary/95 text-white py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">© 2024 ЮрКонсалт. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
