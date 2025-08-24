import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: "https://09539abe9132ef7911590bd5848fe04d@o4508794396278784.ingest.us.sentry.io/4508794398310400",

  tracesSampleRate: 1,

  debug: false,
})
