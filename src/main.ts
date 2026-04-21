if (import.meta.env.DEV) {
  import("react-grab");
}

import './style.css'

const alias = 'mynameistito'
const socialUrl = 'https://x.com/mynameistito'
const chapter = 28
const nzstOffsetMilliseconds = 12 * 60 * 60 * 1000
const birthdayStartNzstMilliseconds = Date.UTC(2026, 3, 21, 0, 0, 0)
const nextBirthdayStartNzstMilliseconds = Date.UTC(2027, 3, 21, 0, 0, 0)

const createNzstFormatter = (options: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat('en-NZ', {
    ...options,
    timeZone: 'UTC',
  })

const birthdayFormatter = createNzstFormatter({
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

const birthdayLabel = birthdayFormatter.format(new Date(birthdayStartNzstMilliseconds))

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App root not found')
}

app.innerHTML = `
  <div class="page-shell">
    <header class="site-header" id="top">
      <a class="brand" href="#top" aria-label="Jump to the top of the birthday page">
        <span class="brand-mark">
          <img src="/avatar.png" alt="Avatar for ${alias}" />
        </span>
        <span class="brand-copy">${alias}</span>
      </a>
      <p class="header-chip">birthday broadcast / chapter ${chapter} / NZST</p>
    </header>

    <main>
      <section class="hero panel">
        <div class="hero-copy">
          <div class="hero-copy__stack">
            <p class="eyebrow">${birthdayLabel} / built for the edge / NZST +12</p>
            <h1>
              <span class="hero-name">${alias}</span>
              <span class="accent">turns ${chapter}</span>
            </h1>
          </div>

          <p class="lede">
            A bright little corner of the internet made to celebrate the alias, the experiments,
            and the next lap around the sun. Poster energy, clean code, zero fluff.
          </p>

          <div class="hero-actions">
            <a class="button" href="#manifesto">Enter chapter ${chapter}</a>
            <a class="button button-secondary" href="#dayboard">Scan the dayboard</a>
            <a class="button button-social" href="${socialUrl}" target="_blank" rel="noreferrer">
              x.com/mynameistito
            </a>
          </div>
        </div>

        <div class="hero-stage">
          <p class="badge-orbit">live from Cloudflare</p>

          <div class="number-card">
            <span class="number-card__year">chapter</span>
            <span class="number-card__value">${chapter}</span>
            <span class="number-card__note">birthday edition launched on ${birthdayLabel}</span>
          </div>

          <div class="hero-mini-grid">
            <article class="hero-mini-card">
              <span>NZST pulse</span>
              <strong data-local-time>--:--:--</strong>
            </article>
            <article class="hero-mini-card">
              <span>Year count</span>
              <strong data-chapter-count>Day 1 of 365</strong>
            </article>
            <article class="hero-mini-card">
              <span>Running on</span>
              <strong>Vite + Cloudflare Workers</strong>
            </article>
            <article class="hero-mini-card">
              <span>NZST date</span>
              <strong data-local-day>Loading current date…</strong>
            </article>
          </div>
        </div>
      </section>

      <section class="ticker" aria-label="Birthday tape">
        <div class="ticker__track" aria-hidden="true">
          <span>${alias} / chapter ${chapter} / birthday edition / hosted on Cloudflare / standard Vite site / NZST +12 / bright internet energy</span>
          <span>${alias} / chapter ${chapter} / birthday edition / hosted on Cloudflare / standard Vite site / NZST +12 / bright internet energy</span>
        </div>
      </section>

      <section class="grid-section panel" id="dayboard">
        <div class="section-heading">
          <div>
            <p class="eyebrow">dayboard</p>
            <h2>The signal around chapter ${chapter}</h2>
          </div>
          <p class="section-note">
            Not a corporate bio. More like a snapshot of what this next year wants to feel like:
            sharper taste, warmer presence, and more things shipped with personality intact.
          </p>
        </div>

        <div class="dayboard-grid">
          <article class="info-card">
            <p class="info-card__label">Alias</p>
            <p class="info-card__value">${alias}</p>
            <p class="info-card__copy">
              Internet handle, creative wrapper, and the name printed on the front of this birthday poster.
            </p>
            <div class="chips">
              <span>personal site</span>
              <span>birthday build</span>
            </div>
          </article>

          <article class="info-card">
            <p class="info-card__label">Moodboard</p>
            <p class="info-card__value">Warm light. Loud type.</p>
            <p class="info-card__copy">
              A little editorial, a little street poster, and just enough polish to feel intentional instead of sterile.
            </p>
            <div class="chips">
              <span>sun-warm</span>
              <span>editorial</span>
              <span>playful</span>
            </div>
          </article>

          <article class="info-card">
            <p class="info-card__label">Stack</p>
            <p class="info-card__value">Vite first, edge ready.</p>
            <p class="info-card__copy">
              Lean front-end setup, fast local dev, and a deploy path that lands cleanly on Cloudflare without extra ceremony.
            </p>
            <div class="chips">
              <span>TypeScript</span>
              <span>Wrangler</span>
              <span>Workers assets</span>
            </div>
          </article>

          <article class="info-card">
            <p class="info-card__label">Wanted for</p>
            <p class="info-card__value">Making the internet feel personal again.</p>
            <p class="info-card__copy">
              Fewer bland templates. More corners with taste, memory, and a pulse you can actually feel.
            </p>
            <div class="chips">
              <span>small web</span>
              <span>human signal</span>
            </div>
          </article>
        </div>
      </section>

      <section class="grid-section panel" id="manifesto">
        <div class="section-heading">
          <div>
            <p class="eyebrow">birthday manifesto</p>
            <h2>Four rules for the year ahead</h2>
          </div>
          <p class="section-note">
            The kind of notes you stick on a wall, not tuck into a productivity app.
          </p>
        </div>

        <div class="manifesto-grid">
          <article class="manifesto-card">
            <p class="manifesto-card__index">01 / build the weird thing</p>
            <h3>Make work that still sounds like a real person made it.</h3>
            <p>
              Follow instinct a little harder. Keep the sharp edges that give a project a voice.
            </p>
          </article>

          <article class="manifesto-card">
            <p class="manifesto-card__index">02 / protect the mornings</p>
            <h3>Give the best hours to the ideas with the most pulse.</h3>
            <p>
              Less drift, less doom-scroll, more space for deep work before the noise arrives.
            </p>
          </article>

          <article class="manifesto-card">
            <p class="manifesto-card__index">03 / stay warm online</p>
            <h3>Keep curiosity bigger than cynicism.</h3>
            <p>
              Good taste is not just visual. It is how you speak, share, and leave room for other people.
            </p>
          </article>

          <article class="manifesto-card">
            <p class="manifesto-card__index">04 / ship with rhythm</p>
            <h3>Celebrate momentum instead of waiting for a mythical perfect draft.</h3>
            <p>
              Launch the page. Post the experiment. Let the year collect proof of movement.
            </p>
          </article>
        </div>
      </section>

      <section class="year-panel panel">
        <div>
          <p class="eyebrow">chapter meter</p>
          <h2>Fresh days. No autopilot.</h2>
          <p class="lede lede-on-dark">
            This site launched on ${birthdayLabel} and keeps a live little pulse for the year that follows.
          </p>
        </div>

        <div class="meter-card">
          <div class="meter-top">
            <span data-chapter-count>Day 1 of 365</span>
            <span>chapter ${chapter}</span>
          </div>
          <div class="meter-bar" aria-hidden="true">
            <span data-chapter-fill></span>
          </div>
          <p class="meter-caption">
            NZST time: <strong data-local-time>--:--:--</strong> · <span data-local-day>Loading current date…</span>
          </p>
        </div>
      </section>

      <section class="closing panel">
        <div class="closing-copy">
          <p class="eyebrow">postscript</p>
          <h2>Here’s to staying sharp, warm, and a little louder online.</h2>
        </div>
        <p class="closing-note">
          Made with Vite, set up to deploy straight to Cloudflare, and designed like a birthday poster that learned how to code.
        </p>
      </section>
    </main>

    <footer class="site-footer">
      <span>${alias} / ${chapter}</span>
      <a href="${socialUrl}" target="_blank" rel="noreferrer">x.com/mynameistito</a>
      <span>happy birthday edition</span>
    </footer>
  </div>
`

const localTimeNodes = document.querySelectorAll<HTMLElement>('[data-local-time]')
const localDayNodes = document.querySelectorAll<HTMLElement>('[data-local-day]')
const chapterCountNodes = document.querySelectorAll<HTMLElement>('[data-chapter-count]')
const chapterFill = document.querySelector<HTMLElement>('[data-chapter-fill]')

const timeFormatter = createNzstFormatter({
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
})

const dayFormatter = createNzstFormatter({
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

const millisecondsPerDay = 1000 * 60 * 60 * 24
const totalChapterDays = Math.round(
  (nextBirthdayStartNzstMilliseconds - birthdayStartNzstMilliseconds) / millisecondsPerDay,
)

const updateBirthdayPulse = () => {
  const nowNzst = new Date(Date.now() + nzstOffsetMilliseconds)
  const elapsedDays =
    Math.floor((nowNzst.getTime() - birthdayStartNzstMilliseconds) / millisecondsPerDay) + 1
  const chapterDay = Math.min(totalChapterDays, Math.max(1, elapsedDays))
  const chapterProgress = (chapterDay / totalChapterDays) * 100

  for (const node of localTimeNodes) {
    node.textContent = `${timeFormatter.format(nowNzst)} NZST`
  }

  for (const node of localDayNodes) {
    node.textContent = dayFormatter.format(nowNzst)
  }

  for (const node of chapterCountNodes) {
    node.textContent = `Day ${chapterDay} of ${totalChapterDays}`
  }

  if (chapterFill) {
    chapterFill.style.width = `${chapterProgress}%`
  }
}

updateBirthdayPulse()
window.setInterval(updateBirthdayPulse, 1000)
