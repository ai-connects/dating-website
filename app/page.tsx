import Image from "next/image";
import A from "./components/AnimateOnScroll";

export default function Home() {
  return (
    <div className="font-sans overflow-x-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen bg-g900 overflow-hidden">
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-12 py-6 lg:px-20">
          <A animation="fadeDown" duration={600} threshold={0}>
            <Image
              src="/images/havit-logo.svg"
              alt="Havit"
              width={148}
              height={70}
              className="h-8 w-auto"
            />
          </A>
          <A animation="fadeDown" duration={600} delay={100} threshold={0}>
            <nav className="hidden md:flex items-center gap-10">
              <a href="#story" className="text-white text-lg font-medium hover:text-primary transition-colors">Story</a>
              <a href="#product" className="text-white text-lg font-medium hover:text-primary transition-colors">Product</a>
              <a href="#safety" className="text-white text-lg font-medium hover:text-primary transition-colors">Safety</a>
              <a href="#support" className="text-white text-lg font-medium hover:text-primary transition-colors">Support</a>
            </nav>
          </A>
          <A animation="fadeDown" duration={600} delay={200} threshold={0}>
            <div className="flex items-center gap-1 text-primary font-bold text-lg">
              KO
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </A>
        </header>

        <div className="flex items-center min-h-screen px-12 lg:px-20 max-w-[1920px] mx-auto">
          <div className="flex-1">
            <A animation="fadeUp" duration={800} delay={200} threshold={0}>
              <h1 className="text-5xl md:text-7xl lg:text-6xl 2xl:text-[80px] font-extrabold text-primary leading-tight">
                AI Powered
              </h1>
            </A>
            <A animation="fadeUp" duration={800} delay={400} threshold={0}>
              <h1 className="text-5xl md:text-7xl lg:text-6xl 2xl:text-[80px] font-extrabold text-primary leading-tight">
                Next Generation
              </h1>
            </A>
            <A animation="fadeUp" duration={800} delay={600} threshold={0}>
              <h1 className="text-5xl md:text-7xl lg:text-6xl 2xl:text-[80px] font-extrabold text-primary leading-tight">
                Dating Platform.
              </h1>
            </A>
            {/* CTA */}
            <A animation="fadeUp" duration={700} delay={900} threshold={0}>
              <div className="mt-12 flex items-center gap-3">
                <div className="bg-havit-yellow rounded-xl px-6 py-3 flex items-center gap-2 cursor-pointer hover:brightness-110 transition animate-glow-pulse">
                  <span className="text-black font-extrabold text-xl">Let&apos;s Havit</span>
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </A>
          </div>

          {/* Hero Card - App UI */}
          <A animation="slideRight" duration={1000} delay={500} threshold={0} className="flex-1 hidden lg:flex justify-end">
            <div className="animate-hero-float">
              <Image
                src="/images/hero-card.png"
                alt="Havit app card interface"
                width={1296}
                height={973}
                className="w-full max-w-[650px] h-auto object-contain"
                priority
              />
            </div>
          </A>
        </div>
      </section>

      {/* ===== SAME HOBBIES SECTION ===== */}
      <section id="story" className="bg-white py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-20 text-center">
          <A animation="fadeUp" duration={700}>
            <h2 className="text-4xl md:text-5xl lg:text-5xl 2xl:text-[60px] font-bold text-black leading-snug">
              Same Hobbies,<br />Same Lifestyle
            </h2>
          </A>
          <A animation="fadeUp" duration={700} delay={200}>
            <p className="mt-6 text-xl md:text-2xl lg:text-2xl 2xl:text-[30px] font-semibold text-black/80">
              Start a special relationship at Havit
            </p>
          </A>

          {/* App UI - Profile Cards */}
          <A animation="scaleUp" duration={900} delay={400}>
            <div className="mt-16 flex justify-center">
              <Image
                src="/images/hobbies-phones.png"
                alt="Profile cards showing hobbies and lifestyle tags"
                width={730}
                height={815}
                className="w-full max-w-[730px] h-auto"
              />
            </div>
          </A>
        </div>
      </section>

      {/* ===== FATEFUL RELATIONSHIP ===== */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-20 text-center">
          <A animation="fadeUp" duration={700}>
            <h2 className="text-4xl md:text-5xl lg:text-5xl 2xl:text-[60px] font-bold text-black leading-snug">
              In Havit<br />A Fateful Relationship Begins!
            </h2>
          </A>
          <A animation="fadeUp" duration={700} delay={200}>
            <p className="mt-6 text-xl md:text-2xl lg:text-2xl 2xl:text-[30px] font-semibold text-black/60">
              When the choices of two people meet
            </p>
          </A>

          {/* Steps */}
          <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
            {[
              { label: "Hobby", color: "bg-white border-2 border-black", icon: "🎯" },
              { label: "Connect", color: "bg-havit-pink", icon: "💕" },
              { label: "Meet", color: "bg-havit-yellow", icon: "🤝" },
              { label: "Adapt", color: "bg-havit-blue", icon: "✨" },
            ].map((step, i) => (
              <A key={step.label} animation="fadeUp" duration={600} delay={400 + i * 150}>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-3">
                    <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <span className="text-2xl md:text-3xl font-extrabold text-black">
                      {step.label}
                    </span>
                  </div>
                  {i < 3 && (
                    <svg className="w-8 h-8 text-gray-300 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              </A>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONNECT SECTION ===== */}
      <section id="product" className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-20 flex flex-col lg:flex-row items-center gap-16">
          <A animation="slideLeft" duration={800} className="flex-1">
            <h2 className="text-6xl md:text-7xl lg:text-6xl 2xl:text-[80px] font-extrabold text-havit-pink leading-tight">
              Connect.
            </h2>
            <p className="mt-8 text-xl md:text-2xl lg:text-2xl 2xl:text-[30px] font-semibold text-black/70 leading-relaxed">
              Leveraging data on hobbies, lifestyle, and values, find your ideal match using Havit&apos;s exclusive AI matching system
            </p>
          </A>
          <A animation="slideRight" duration={800} delay={200} className="flex-1 flex justify-center">
            <Image
              src="/images/connect-illustration.png"
              alt="Connect feature - AI matching interface"
              width={664}
              height={1642}
              className="w-full max-w-[400px] max-h-[700px] object-contain object-top"
            />
          </A>
        </div>
      </section>

      {/* ===== MEET SECTION ===== */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-20 flex flex-col lg:flex-row-reverse items-center gap-16">
          <A animation="slideRight" duration={800} className="flex-1">
            <h2 className="text-6xl md:text-7xl lg:text-6xl 2xl:text-[80px] font-extrabold text-havit-yellow leading-tight">
              Meet.
            </h2>
            <p className="mt-8 text-xl md:text-2xl lg:text-2xl 2xl:text-[30px] font-semibold text-black/70 leading-relaxed">
              Discover perfect matches and enhance your relationships with Havit&apos;s revolutionary services
            </p>
          </A>
          <A animation="slideLeft" duration={800} delay={200} className="flex-1 flex justify-center">
            <Image
              src="/images/meet-illustration.png"
              alt="Meet feature - discover matches"
              width={743}
              height={1171}
              className="w-full max-w-[450px] max-h-[700px] object-contain object-top"
            />
          </A>
        </div>
      </section>

      {/* ===== ADAPT SECTION ===== */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-20 flex flex-col lg:flex-row items-center gap-16">
          <A animation="slideLeft" duration={800} className="flex-1">
            <h2 className="text-6xl md:text-7xl lg:text-6xl 2xl:text-[80px] font-extrabold text-havit-blue leading-tight">
              Adapt.
            </h2>
            <p className="mt-8 text-xl md:text-2xl lg:text-2xl 2xl:text-[30px] font-semibold text-black/70 leading-relaxed">
              At Havit, we prioritize forming genuine relationships that focus on shared goals and values rather than just appearances or credentials
            </p>
          </A>
          <A animation="slideRight" duration={800} delay={200} className="flex-1 flex justify-center">
            <Image
              src="/images/adapt-illustration.png"
              alt="Adapt feature - relationship building"
              width={698}
              height={779}
              className="w-full max-w-[500px] h-auto"
            />
          </A>
        </div>
      </section>

      {/* ===== SWIPING SECTION ===== */}
      <section className="bg-g900 py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-20 flex flex-col lg:flex-row items-center gap-16">
          <A animation="slideLeft" duration={800} className="flex-1 flex justify-center">
            <Image
              src="/images/swiping-card.png"
              alt="Swipe right to match"
              width={1566}
              height={1390}
              className="w-full max-w-[400px] h-auto"
            />
          </A>
          <A animation="slideRight" duration={800} delay={200} className="flex-1">
            <h2 className="text-4xl md:text-5xl lg:text-5xl 2xl:text-[60px] font-bold text-white leading-snug">
              By swiping to the right<br />A new match is made
            </h2>
            <div className="mt-8 inline-flex items-center gap-3 bg-white rounded-full px-6 py-3">
              <div className="w-8 h-8 rounded bg-havit-yellow flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <span className="text-black font-extrabold text-2xl">Pick!</span>
            </div>
          </A>
        </div>
      </section>

      {/* ===== ALL ABOUT ME ===== */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-20 flex flex-col lg:flex-row items-center gap-16">
          <A animation="slideLeft" duration={800} className="flex-1">
            <h2 className="text-4xl md:text-5xl lg:text-5xl 2xl:text-[60px] font-bold text-black leading-snug">
              All About Me
            </h2>
            <p className="mt-8 text-xl md:text-2xl lg:text-2xl 2xl:text-[30px] font-semibold text-black/70 leading-relaxed">
              Create a unique profile that reflects you based on a survey of your personal preferences and lifestyle
            </p>
          </A>
          <A animation="slideRight" duration={800} delay={200} className="flex-1 flex justify-center">
            <Image
              src="/images/about-me.png"
              alt="All About Me - profile creation"
              width={1179}
              height={1080}
              className="w-full max-w-[500px] h-auto"
            />
          </A>
        </div>
      </section>

      {/* ===== DEEP CONNECTIONS ===== */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-20">
          <A animation="fadeUp" duration={700}>
            <h2 className="text-4xl md:text-5xl lg:text-5xl 2xl:text-[60px] font-bold text-black leading-snug text-center">
              Deep, Meaningful Connections<br className="hidden lg:block" /> With Just One Scroll
            </h2>
          </A>
          <A animation="fadeUp" duration={700} delay={200}>
            <p className="mt-6 text-xl md:text-2xl lg:text-2xl 2xl:text-[30px] font-semibold text-black/60 text-center leading-relaxed">
              Hobbies, Interests, Lifestyle and Values<br />
              You can gain in-depth insight into others through their profile
            </p>
          </A>

          {/* App UI */}
          <A animation="scaleUp" duration={900} delay={400}>
            <div className="mt-16 flex justify-center">
              <Image
                src="/images/deep-connections.png"
                alt="Deep connections - profile tags and lifestyle insights"
                width={1363}
                height={747}
                className="w-full max-w-[900px] h-auto"
              />
            </div>
          </A>
        </div>
      </section>

      {/* ===== AI CONVERSATION TIPS ===== */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-20">
          <A animation="fadeUp" duration={700}>
            <h2 className="text-4xl md:text-5xl lg:text-5xl 2xl:text-[60px] font-bold text-black leading-snug text-center">
              Conversation Tips<br />Using Generative AI
            </h2>
          </A>
          <A animation="fadeUp" duration={700} delay={200}>
            <p className="mt-6 text-xl md:text-2xl lg:text-2xl 2xl:text-[30px] font-semibold text-black/60 text-center leading-relaxed">
              Having trouble keeping the conversation going?<br />
              Havit AI provides easy conversation tips
            </p>
          </A>

          {/* App UI */}
          <A animation="fadeUp" duration={900} delay={400}>
            <div className="mt-16 flex justify-center">
              <Image
                src="/images/ai-chat.png"
                alt="AI conversation tips interface"
                width={518}
                height={683}
                className="w-full max-w-[450px] h-auto"
              />
            </div>
          </A>
        </div>
      </section>

      {/* ===== DISTINCTIVE RECOMMENDATION SYSTEM ===== */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-20">
          <A animation="fadeUp" duration={700}>
            <h2 className="text-4xl md:text-5xl lg:text-5xl 2xl:text-[60px] font-bold text-black leading-snug text-center">
              Distinctive Recommendation System
            </h2>
          </A>
          <A animation="fadeUp" duration={700} delay={200}>
            <p className="mt-6 text-xl md:text-2xl lg:text-2xl 2xl:text-[30px] font-semibold text-black/60 text-center leading-relaxed">
              By combining diverse data through our personalized recommendation system<br />
              we suggest the perfect match for you
            </p>
          </A>

          {/* App UI */}
          <A animation="scaleUp" duration={900} delay={400}>
            <div className="mt-16 flex justify-center">
              <Image
                src="/images/recommendation.png"
                alt="Recommendation system with profile cards and match percentages"
                width={1025}
                height={1026}
                className="w-full max-w-[800px] h-auto"
              />
            </div>
          </A>
        </div>
      </section>

      {/* ===== SUPER CHAT ===== */}
      <section className="bg-g900 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-20 flex flex-col lg:flex-row items-center gap-16">
          <A animation="slideLeft" duration={800} className="flex-1">
            <div className="flex items-center gap-3">
              <h2 className="text-4xl md:text-5xl lg:text-5xl 2xl:text-[60px] font-extrabold text-primary leading-tight">
                Super Chat!
              </h2>
              <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <p className="mt-8 text-xl md:text-2xl lg:text-2xl 2xl:text-[30px] font-semibold text-white/80 leading-relaxed">
              Make Your Message Stand Out with Super Chat. Highlight your message and increase your chances of getting a reply
            </p>
          </A>
          <A animation="slideRight" duration={800} delay={200} className="flex-1 flex justify-center">
            <Image
              src="/images/super-chat-phone.png"
              alt="Super Chat feature on phone"
              width={1076}
              height={807}
              className="w-full max-w-[500px] h-auto"
            />
          </A>
        </div>
      </section>

      {/* ===== SPOTLIGHT ON ===== */}
      <section className="bg-g900 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-20 flex flex-col lg:flex-row-reverse items-center gap-16">
          <A animation="slideRight" duration={800} className="lg:w-3/5 min-w-0">
            <h2 className="text-4xl md:text-5xl lg:text-5xl 2xl:text-[60px] font-bold text-primary leading-snug">
              Spotlight ON!
            </h2>
            <p className="mt-6 text-xl md:text-2xl lg:text-2xl 2xl:text-[30px] font-semibold text-white/70 leading-relaxed">
              When the spotlight is on, more people can see your profile
            </p>
          </A>
          <A animation="slideLeft" duration={800} delay={200} className="lg:w-2/5 flex justify-center">
            <Image
              src="/images/spotlight.png"
              alt="Spotlight feature - increase profile visibility"
              width={841}
              height={1059}
              className="w-full max-w-[350px] h-auto"
            />
          </A>
        </div>
      </section>

      {/* ===== NO FAKES ===== */}
      <section id="safety" className="bg-g900 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-20 flex flex-col lg:flex-row items-center gap-16">
          <A animation="slideLeft" duration={800} className="lg:w-3/5 min-w-0">
            <h2 className="text-4xl md:text-5xl lg:text-5xl 2xl:text-[60px] font-bold text-primary leading-snug">
              No Fakes, Just Real Connection
            </h2>
            <p className="mt-6 text-xl md:text-2xl lg:text-2xl 2xl:text-[30px] font-semibold text-white/70 leading-relaxed">
              Havit AI uses facial scanning technology to identify fake, spam, and stolen profiles, providing a safer environment
            </p>
          </A>
          <A animation="slideRight" duration={800} delay={200} className="lg:w-2/5 flex justify-center">
            <Image
              src="/images/no-fakes.png"
              alt="Verification badge and anti-fake system"
              width={639}
              height={738}
              className="w-full max-w-[320px] h-auto"
            />
          </A>
        </div>
      </section>

      {/* ===== PRIVACY ===== */}
      <section className="bg-g900 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-20 flex flex-col lg:flex-row-reverse items-center gap-16">
          <A animation="slideRight" duration={800} className="lg:w-3/5 min-w-0">
            <h2 className="text-4xl md:text-5xl lg:text-5xl 2xl:text-[60px] font-bold text-primary leading-snug">
              Privacy is Guaranteed
            </h2>
            <p className="mt-6 text-xl md:text-2xl lg:text-2xl 2xl:text-[30px] font-bold text-white/70 leading-relaxed">
              If you don&apos;t want your profile visible to friends, ex-partners, family, or bosses, we will hide it for you!
            </p>
          </A>
          <A animation="slideLeft" duration={800} delay={200} className="lg:w-2/5 flex justify-center">
            <Image
              src="/images/privacy.png"
              alt="Privacy settings - block acquaintances"
              width={564}
              height={863}
              className="w-full max-w-[300px] h-auto"
            />
          </A>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer id="support" className="bg-g900 border-t border-g700 py-12">
        <A animation="fadeIn" duration={600}>
          <div className="max-w-7xl mx-auto px-8 lg:px-20">
            <div className="text-center">
              <p className="text-g600 text-sm leading-relaxed">
                주식회사 에이아이커넥트 (대표:윤희욱) ㅣ aiconnects.me<br />
                사업자등록번호 000-00-00000 ㅣ 고객센터 00-000-0000<br />
                서비스 이용약관 ㅣ 개인정보처리방침 ㅣ 위치기반서비스 이용약관 ㅣ 쿠키 정책
              </p>
              <p className="mt-4 text-g600/60 text-sm">
                © AI CONNECT. All rights reserved.
              </p>
            </div>
          </div>
        </A>
      </footer>
    </div>
  );
}
