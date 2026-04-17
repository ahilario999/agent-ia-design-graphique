// ─────────────────────────────────────────────────────────────
// INSTAGRAM — Dernier post via Behold.so (beaucoup plus simple)
//
// Behold.so gère l'auth Instagram automatiquement — pas de
// token à renouveler manuellement, pas d'app Meta à maintenir.
//
// Setup (2 minutes) :
//   1. Créer un compte sur https://behold.so (gratuit)
//   2. Connecter le compte Instagram @design_graphique_lacite
//   3. Créer un feed → copier le Widget ID
//   4. Ajouter dans Vercel : BEHOLD_WIDGET_ID = ton_widget_id
// ─────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'GET')    return res.status(405).end()

  const widgetId = process.env.BEHOLD_WIDGET_ID

  if (!widgetId) {
    return res.status(200).json({ post: null, configured: false })
  }

  try {
    const response = await fetch(`https://feeds.behold.so/${widgetId}`)
    const posts    = await response.json()

    if (!response.ok || !Array.isArray(posts) || posts.length === 0) {
      return res.status(200).json({ post: null })
    }

    const item = posts[0]

    // Pour les carrousels, on prend la première image
    const imageUrl = item.mediaType === 'CAROUSEL_ALBUM'
      ? item.children?.[0]?.mediaUrl || item.mediaUrl
      : item.mediaType === 'VIDEO'
        ? item.thumbnailUrl
        : item.mediaUrl

    return res.status(200).json({
      post: {
        imageUrl,
        permalink: item.permalink,
        caption:   item.caption   || '',
        mediaType: item.mediaType || '',
      },
      configured: true,
    })

  } catch (err) {
    console.error('[Instagram/Behold] Erreur:', err.message)
    return res.status(200).json({ post: null, error: err.message })
  }
}
