const PHOTO_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp']

const STYLIST_PHOTO_BY_NAME = {
  'Dela Torre, Imae Rose': 'Dela Torre, Imae Rose_EL Glam Mandaue_Nail Technician.jpg',
  'Yekla, Sanny Grace': 'Yekla, Sanny Grace_EL Glam Mandaue_Aesthetician.jpg',
  'Davis, Rosegina': 'Davis, Rosegina_EL Glam Mandaue_Nail Technician.jpg',
  'Momo, Ruthamie': 'Momo. Ruthamie_EL Glam Mandaue_Facialist.jpg',
  'Yaon, Jenipher': 'Yaon, Jennipher_EL Glam Mandaue_Hairdresser.jpg',
  'Arnado, Buenafe': 'Arnado, Buenafe_EL Glam Pajac_Hairdresser or Nail Technician.jpg',
  'Omac, Elvira': 'Omac, Elvira_EL Glam Pajac_Hairdresser.jpg',
  'Belarmino, Mattlaine Clyrr': 'Belarmino, Mattlaine Clyrr_EL Glam Pajac_Aesthetician.jpg',
  'Entig, Jenalyn': 'Entig, Jenalyn_EL Glam Pajac_Nail Technician.jpg',
  'Gloria, Francisco': 'Gloria, Francisco_EL Glam Pajac_Barber.jpg',
  'Demape, Keyn Joshua': 'Demape, Keyn Joshua_EL Glam Pajac_Barber.jpg',
  'Abadajos, Julie Ann': 'Abadajos, Julie Ann_EL Glam Pusok_Aesthetician.jpg',
  'Pedor, Rowena': 'Pedor, Rowena_EL Glam Pusok_Nail Technician.jpg',
  'Dimco, Janeth': 'Dimco, Janeth_EL Glam Pusok_Hairdresser.jpg',
  'Macatanong, Jessica': 'Macatanong, Jessica_EL Glam Cebu_Nail Technician.jpg',
  'Tallo, Lucille': 'Tallo, Lucille_EL GLam Cebu_Hairdresser.jpg',
  'Cañizares, Rubelyn': 'Cañizares, Rubelyn_EL Glam Cebu_Facialist.jpg',
  'Cabreles, Jennifer': 'Cabreles, Jennifer_EL Glam Cebu_Nail Technician.jpg',
  'Dela Torre, Jeanny': 'Dela Torre, Jeanny_EL Glam Cebu_Facialist.jpg',
}

export const getInitials = (name) =>
  name
    .split(',')
    .map((part) => part.trim()[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()

export const getStylistPhotoCandidates = (name) => {
  const mappedFile = STYLIST_PHOTO_BY_NAME[name]
  if (mappedFile) {
    return [encodeURI(`/${mappedFile}`)]
  }

  const fallbackBase = encodeURIComponent(name)
  return PHOTO_EXTENSIONS.map((ext) => `/stylists/${fallbackBase}.${ext}`)
}

export const handleStylistPhotoError = (event, candidates) => {
  const img = event.currentTarget
  const currentIndex = Number(img.dataset.photoIndex || '0')
  const nextIndex = currentIndex + 1

  if (nextIndex < candidates.length) {
    img.dataset.photoIndex = String(nextIndex)
    img.src = candidates[nextIndex]
    return
  }

  img.style.display = 'none'
}
