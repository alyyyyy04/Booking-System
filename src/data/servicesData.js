// ==========================
// SERVICE DATA
// ==========================
const faceAndBeauty = [
  {
    subcategory: 'Facial Treatments',
    services: [
      { name: 'Signature Facial', price: '₱399' },
      { name: 'Facial with Diamond Peel', price: '₱499' },
      { name: 'Facial Combo', price: '₱599' },
      { name: 'Facial Botox', price: '₱699' },
      { name: 'Acne Control Treatment', price: '₱899' },
      { name: 'Backcial', price: '₱999' },
      { name: 'Melasma Care Treatment', price: '₱2,499' },
      { name: 'Korean BB Glow', price: '₱1,299' },
      { name: 'Hydra-Facial Treatment', price: '₱999' },
      { name: 'Carbon Laser Facial', price: '₱999' },
    ],
  },
  {
    subcategory: 'Warts Removal',
    services: [
      { name: 'Unlimited Face Area', price: '₱799' },
      { name: 'Unlimited Neck Area', price: '₱799' },
      { name: 'Unlimited Face & Neck Area', price: '₱1,499' },
    ],
  },
  {
    subcategory: 'Eyelash Care',
    services: [
      { name: 'Eyelash Lifting', price: '₱499' },
      { name: 'Eyelash Lifting with Tint', price: '₱599' },
    ],
  },
  {
    subcategory: 'Eyelash Extensions',
    services: [
      { name: 'Synthetic Eyelashes', price: '₱599' },
      { name: 'Regular Human Hair', price: '₱799' },
      { name: 'Ultrasoft Human Hair', price: '₱899' },
    ],
  },
  {
    subcategory: 'Semi-Permanent Makeup',
    services: [
      { name: 'Micro-Shading', price: '₱2,499 (1 Session) / ₱3,999 (2 Sessions)' },
      { name: 'Eyeliner', price: '₱2,499 / ₱3,999' },
      { name: 'Lip Tattoo', price: '₱2,499 / ₱3,999' },
    ],
  },
  {
    subcategory: 'Eyebrow Care',
    services: [
      { name: 'Brow Lamination', price: '₱399' },
      { name: 'Brow Lamination with Tint', price: '₱449' },
    ],
  },
  {
    subcategory: 'Waxing / Threading',
    services: [
      { name: 'Eyebrows Threading', price: '₱120' },
      { name: 'Eyebrows Waxing', price: '₱149' },
      { name: 'Upper Mouth', price: '₱149' },
      { name: 'Lower Mouth', price: '₱149' },
      { name: 'Underarms', price: '₱199' },
      { name: 'Brazilian/Bikini Line', price: '₱699' },
    ],
  },
  {
    subcategory: 'Permanent Hair Removal',
    services: [
      { name: 'Underarm Hair Removal', price: '₱699' },
      { name: 'Underarm Whitening', price: '₱699' },
      { name: 'Underarm Removal & Whitening', price: '₱1,099' },
      { name: 'Lower/Upper Mouth', price: '₱399' },
      { name: 'Lower & Upper Mouth Combo', price: '₱599' },
      { name: 'Arms', price: '₱399 – ₱799' },
      { name: 'Legs', price: '₱599 – ₱999' },
      { name: 'Brazilian/Bikini Line', price: '₱999' },
      { name: 'Pigmentation Laser', price: '₱899' },
      { name: 'Acne/Skin Rejuvenating Laser', price: '₱899' },
    ],
  },
]

const hairCareAndStyling = [
  {
    subcategory: 'Men',
    services: [
      { name: 'Haircut', price: '₱150' },
      { name: 'Haircut with Shampoo', price: '₱250' },
      { name: 'Haircut with Color', price: '₱1,000' },
    ],
  },
  {
    subcategory: 'Women',
    services: [
      { name: 'Haircut', price: '₱250' },
      { name: 'Haircut with Shampoo', price: '₱350' },
      { name: 'Hair Iron/Blowdry', price: '₱350' },
    ],
  },
  {
    subcategory: 'Special Treatments',
    services: [
      { name: 'Loreal Power Dose', price: '₱1,500' },
      { name: 'Plarmia Scalp Treatment', price: '₱1,500' },
      { name: 'Grand Linkage', price: '₱2,000' },
      { name: 'Hair Cellophane', price: '₱800' },
    ],
  },
  {
    subcategory: 'Hair Color',
    services: [
      { name: 'Hair Color with Treatment', price: '₱1,500' },
      { name: 'Hair Color, Highlights, Treatment', price: '₱2,500' },
      { name: 'Hair Balayage', price: '₱3,000 (starting price)' },
    ],
  },
  {
    subcategory: 'Rebonding',
    services: [
      { name: 'Regular Hair Rebond', price: '₱1,500' },
      { name: 'Premium Hair Rebond', price: '₱3,000' },
    ],
  },
  {
    subcategory: 'Brazilian Treatment',
    services: [
      { name: 'Brazilian Treatment', price: '₱1,500' },
      { name: 'Brazilian Treatment + Hair Color', price: '₱2,500' },
      { name: 'Brazilian Treatment + Hair Rebond', price: '₱2,500' },
    ],
  },
  {
    subcategory: 'Hair Combos',
    services: [
      { name: 'Hair Color + Rebond + Brazilian', price: '₱3,000' },
      { name: 'Highlights + Color + Rebond + Brazilian', price: '₱3,500' },
    ],
  },
  {
    subcategory: 'Hair & Makeup',
    services: [
      { name: 'Hairdo/Styling', price: '₱500' },
      { name: 'Make Up', price: '₱500' },
      { name: 'Hair & Make Up', price: '₱800' },
    ],
  },
]

const bodyNailWellness = [
  {
    subcategory: 'Massage',
    services: [
      { name: 'Full Body Massage (60 mins)', price: '₱599' },
      { name: 'Full Body Massage (30 mins)', price: '₱399' },
      { name: 'Foot Massage (60 mins)', price: '₱349' },
      { name: 'Foot Massage (30 mins)', price: '₱249' },
      { name: 'Ventosa Cupping', price: '₱699' },
    ],
  },
  {
    subcategory: 'Body Care',
    services: [
      { name: 'Body Scrub & Whitening', price: '₱999' },
      { name: 'Underarm Whitening', price: '₱499' },
      { name: 'Underarm Premium Glow', price: '₱899' },
      { name: 'Butt/Bikini Line Whitening', price: '₱599' },
      { name: 'Bikini Premium Glow', price: '₱1,199' },
      { name: 'Elbows/Knees Whitening', price: '₱499' },
    ],
  },
  {
    subcategory: 'Facial & Body Slimming',
    services: [
      { name: 'RF Facial Contour', price: '₱349' },
      { name: 'RF with Cavitation', price: '₱599' },
      { name: 'RF Arms/Tummy/Back', price: '₱1,499' },
      { name: 'Mesotherapy with FREE RF', price: '₱999' },
      { name: 'Ultherapy (Face Area)', price: '₱3,999' },
      { name: 'Ultherapy (Other Areas)', price: '₱5,999' },
      { name: 'Trio Slim', price: '₱999' },
    ],
  },
  {
    subcategory: 'Nail Care - Regular Polish',
    services: [
      { name: 'Manicure', price: '₱150' },
      { name: 'Pedicure with Soaking', price: '₱200' },
      { name: 'Pedicure with Footspa', price: '₱450' },
    ],
  },
  {
    subcategory: 'Nail Care - Imported Polish',
    services: [
      { name: 'Manicure', price: '₱230' },
      { name: 'Pedicure with Soaking', price: '₱300' },
      { name: 'Pedicure with Footspa', price: '₱550' },
    ],
  },
  {
    subcategory: 'Nail Care - Gel Polish',
    services: [
      { name: 'Manicure', price: '₱550' },
      { name: 'Pedicure with Soaking', price: '₱600' },
      { name: 'Pedicure with Footspa', price: '₱750' },
      { name: 'Foot Spa Alone', price: '₱350' },
    ],
  },
  {
    subcategory: 'Nail Extensions',
    services: [
      { name: 'Imported Extensions', price: '₱1,599' },
      { name: 'Soft Gel Extensions', price: '₱1,299' },
    ],
  },
  {
    subcategory: 'Others',
    services: [
      { name: 'Additional Nail Art', price: '₱350' },
      { name: 'Stones', price: '₱10' },
    ],
  },
  {
    subcategory: 'Gluta Push & Drip',
    services: [
      { name: 'Vitamin C Shot', price: '₱199' },
      { name: 'Collagen Shot', price: '₱380' },
      { name: 'Stem Cell', price: '₱380' },
      { name: 'Gluta I.V. Push', price: '₱380' },
      { name: 'Placenta', price: '₱499' },
      { name: 'Glamorous White Shot', price: '₱599' },
      { name: 'Express White Drip', price: '₱999' },
      { name: 'Snow White Drip', price: '₱1,699' },
      { name: 'Cinderella Drip', price: '₱1,799' },
      { name: 'Hikari Drip', price: '₱1,799' },
    ],
  },
]


// ==========================
// CATEGORIES
// ==========================
export const serviceCategories = [
  { id: 'face', title: 'Face & Beauty', data: faceAndBeauty },
  { id: 'hair', title: 'Hair Care', data: hairCareAndStyling },
  { id: 'body', title: 'Body Wellness', data: bodyNailWellness },
]

// ==========================
// BRANCHES & STAFF
// ==========================
export const branches = [
  { id: 'mandauecity', name: 'Mandaue City Branch' },
  { id: 'pajac', name: 'Pajac Branch' },
  { id: 'pusok', name: 'Pusok Branch' },
  { id: 'cebucity', name: 'Cebu City Branch' },
]

export const stylistsByBranch = {
  mandauecity: [
    { name: 'Dela Torre, Imae Rose', role: 'Nail Technician', specialty: 'Nailtech' },
    { name: 'Yekla, Sanny Grace', role: 'Facialist / Massage Therapist' },
    { name: 'Davis, Rosegina', role: 'Hair and Nail Technician' },
    { name: 'Momo, Ruthamie', role: 'Hair and Nail Technician' },
    { name: 'Yaon, Jenipher', role: 'Senior Hairdresser' },
  ],
  pajac: [
    { name: 'Arnado, Buenafe', role: 'Nail Technician' },
    { name: 'Omac, Elvira', role: 'Nail Technician' },
    { name: 'Belarmino, Mattlaine Clyrr', role: 'Facialist' },
    { name: 'Entig, Jenalyn', role: 'Nail Technician' },
    { name: 'Gloria, Francisco', role: 'Barber' },
    { name: 'Demape, Keyn Joshua', role: 'Barber' },
  ],
  pusok: [
    { name: 'Abadajos, Julie Ann', role: 'Facialist' },
    { name: 'Pedor, Rowena', role: 'Nail Technician' },
    { name: 'Dimco, Janeth', role: 'Hairdresser' },
  ],
  cebucity: [
    { name: 'Macatanong, Jessica', role: 'Nail Technician' },
    { name: 'Tallo, Lucille', role: 'Hairdresser' },
    { name: 'Cañizares, Rubelyn', role: 'Facialist' },
    { name: 'Cabreles, Jennifer', role: 'Nail Technician' },
    { name: 'Dela Torre, Jeanny', role: 'Facialist' },
  ],
}

// ==========================
// HELPERS
// ==========================
const parsePrice = (p) => {
  if (!p) return 0
  let c = p.replace(/[₱,]/g, '')
  if (c.includes('–')) return Number(c.split('–')[0])
  if (c.includes('/')) return Number(c.split('/')[0])
  return Number(c) || 0
}

const TAG_RULES = {
  massage: ['massage'],
  inject: ['gluta', 'inject', 'drip', 'shot'],
  major: ['rebond', 'laser', 'treatment'],
}

const getTags = (name) => {
  const lower = name.toLowerCase()
  return Object.entries(TAG_RULES)
    .filter(([_, words]) => words.some((w) => lower.includes(w)))
    .map(([tag]) => tag)
}

// ==========================
// GENERATED CATALOG
// ==========================
export const SERVICE_PRODUCT_CATALOG = serviceCategories.flatMap((cat) =>
  cat.data.flatMap((sub, i) =>
    sub.services.map((s, j) => ({
      id: `${cat.id}-${i}-${j}`,
      label: s.name,
      kind: 'service',
      basePrice: parsePrice(s.price),
      tags: getTags(s.name),
    }))
  )
)

// ==========================
// COMMISSION SYSTEM
// ==========================
const normalizeName = (n) => n.toLowerCase().replace(/[^a-z]/g, '')

export const getCommissionRate = ({ branchId, employeeName, item, price }) => {
  const key = normalizeName(employeeName || '')
  const tags = Array.isArray(item?.tags) ? item.tags : []
  const kind = item?.kind || 'service'

  if (kind === 'product' || tags.includes('product')) return 0.1

  if (branchId === 'mandauecity' && key === normalizeName('Yekla, Sanny Grace')) {
    if (tags.includes('massage')) return 0.4
    if (tags.includes('inject')) return 0.1
    return 0.05
  }

  if (branchId === 'pusok' && key === normalizeName('Pedor, Rowena')) {
    if (price > 499 && tags.includes('major')) return 0.1
    return 0.05
  }

  if (branchId === 'pajac') {
    // Facialist-focused incentives at Pajac.
    if (key === normalizeName('Belarmino, Mattlaine Clyrr')) {
      if (tags.includes('massage')) return 0.4
      if (tags.includes('inject')) return 0.1
      return 0.05
    }

    // Barber-focused incentives at Pajac.
    if (
      key === normalizeName('Gloria, Francisco') ||
      key === normalizeName('Demape, Keyn Joshua')
    ) {
      if (price > 499 && tags.includes('major')) return 0.1
      return 0.05
    }

    return 0.05
  }

  if (branchId === 'cebucity' && key.includes('jennifer')) {
    return 0.05
  }

  return 0.05
}
