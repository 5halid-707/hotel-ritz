export interface Room {
  id: string
  nameAr: string
  nameEn: string
  descriptionAr: string
  descriptionEn: string
  price: number
  currency: string
  capacity: number
  beds: string
  size: string
  view: string
  image: string
  images: string[]
  amenities: string[]
}

export interface Booking {
  id: string
  roomId: string
  roomNameAr: string
  roomNameEn: string
  guestName: string
  guestEmail: string
  guestPhone: string
  checkIn: string
  checkOut: string
  guests: number
  totalPrice: number
  status: 'confirmed' | 'pending' | 'cancelled'
  createdAt: string
  specialRequests?: string
}

export interface Service {
  id: string
  nameAr: string
  nameEn: string
  descriptionAr: string
  descriptionEn: string
  icon: string
  image: string
  price: string
}

export interface Offer {
  id: string
  titleAr: string
  titleEn: string
  descriptionAr: string
  descriptionEn: string
  image: string
  badge: string
}

export interface DiningItem {
  id: string
  nameAr: string
  nameEn: string
  descriptionAr: string
  descriptionEn: string
  image: string
  type: string
  hours: string
  pricing: string
}

export interface FAQ {
  questionAr: string
  answerAr: string
}

export interface NearbyAttraction {
  nameAr: string
  nameEn: string
  descriptionAr: string
  image: string
}

export const rooms: Room[] = [
  {
    id: 'deluxe-room',
    nameAr: 'غرفة ديلوكس',
    nameEn: 'Deluxe Room',
    descriptionAr: 'غرف أنيقة تطل على البحر الأحمر مع وسائل راحة فاخرة. تتميز بديكور كلاسيكي مع لمسات عربية أصيلة.',
    descriptionEn: 'Elegant rooms with Red Sea views and luxurious amenities.',
    price: 2500,
    currency: 'SAR',
    capacity: 2,
    beds: 'سرير ملكي أو سريران مفردان',
    size: '45 م²',
    view: 'إطلالة على البحر',
    image: '/api/marriott/rz-jedrj-deluxe-room-18354-16543:Classic-Hor?wid=600&fit=constrain',
    images: [
      '/api/marriott/rz-jedrj-deluxe-room-18354-16543:Classic-Hor?wid=800&fit=constrain',
      '/api/marriott/rz-jedrj-deluxe-room-seaview-42151:Classic-Hor?wid=800&fit=constrain',
    ],
    amenities: ['واي فاي مجاني', 'تلفاز بشاشة مسطحة', 'ميني بار', 'خزنة', 'مكيف هواء', 'خدمة الغرف 24 ساعة'],
  },
  {
    id: 'club-suite',
    nameAr: 'جناح كلوب',
    nameEn: 'Club Suite',
    descriptionAr: 'أجنحة فسيحة مع إمكانية الوصول الحصري إلى صالة النادي. تجمع بين الفخامة والخصوصية.',
    descriptionEn: 'Spacious suites with exclusive Club Lounge access.',
    price: 5000,
    currency: 'SAR',
    capacity: 3,
    beds: 'سرير ملكي + أريكة سرير',
    size: '75 م²',
    view: 'إطلالة على الكورنيش',
    image: '/api/marriott/rz-jedrj-executive-suite-24416:Classic-Hor?wid=600&fit=constrain',
    images: [
      '/api/marriott/rz-jedrj-executive-suite-24416:Classic-Hor?wid=800&fit=constrain',
      '/api/marriott/50500484-jedrj_2018_0011?wid=800&fit=constrain',
    ],
    amenities: ['واي فاي مجاني', 'تلفاز بشاشة مسطحة', 'ميني بار', 'خزنة', 'مكيف هواء', 'خدمة الغرف 24 ساعة', 'صالة النادي', 'وجبة إفطار مجانية'],
  },
  {
    id: 'royal-suite',
    nameAr: 'الجناح الملكي',
    nameEn: 'Royal Suite',
    descriptionAr: 'قمة الفخامة مع إطلالة بانورامية على البحر. تصميم راقٍ وخدمة شخصية على مدار الساعة.',
    descriptionEn: 'The pinnacle of luxury with panoramic sea views.',
    price: 15000,
    currency: 'SAR',
    capacity: 4,
    beds: 'سرير ملكي + غرفة معيشة منفصلة',
    size: '120 م²',
    view: 'إطلالة بانورامية على البحر',
    image: '/api/marriott/rz-jedrj-royal-suite-bedroom-11347:Classic-Hor?wid=600&fit=constrain',
    images: [
      '/api/marriott/rz-jedrj-royal-suite-bedroom-11347:Classic-Hor?wid=800&fit=constrain',
      '/api/marriott/jedrj-suite-0012:Classic-Hor?wid=800&fit=constrain',
    ],
    amenities: ['واي فاي مجاني', 'تلفاز بشاشة مسطحة', 'ميني بار', 'خزنة', 'مكيف هواء', 'خدمة الغرف 24 ساعة', 'جاكوزي', 'خدمة كونسيرج شخصية', 'نقل من المطار'],
  },
]

export const services: Service[] = [
  {
    id: 'spa',
    nameAr: 'سبا ريتز كارلتون',
    nameEn: 'Ritz-Carlton Spa',
    descriptionAr: 'جرّبوا نخبة من العلاجات التقليدية والعصرية في منتجعنا الصحي الفاخر. ثلاث غرف علاجية مع ساونا وغرفة بخار وحوض استحمام.',
    descriptionEn: 'Experience a range of traditional and modern treatments at our luxury spa.',
    icon: '✦',
    image: '/api/marriott/jedrj-jeddah-spa-50771598?wid=500&fit=constrain',
    price: 'يبدأ من 500 ريال',
  },
  {
    id: 'fitness',
    nameAr: 'مركز اللياقة البدنية',
    nameEn: 'Fitness Center',
    descriptionAr: 'مركز مشرق وفسيح يعمل على مدار الساعة ومجهز بمجموعة متنوعة من الأوزان الحرة وآلات المقاومة وأجهزة تمارين القلب.',
    descriptionEn: '24-hour fitness center with free weights, resistance machines, and cardio equipment.',
    icon: '◈',
    image: '/api/marriott/rz-jedrj-gym-weight-lifting--19058-91254:Classic-Hor?wid=500&fit=constrain',
    price: 'مجاناً للنزلاء',
  },
  {
    id: 'pool',
    nameAr: 'المسبح',
    nameEn: 'Swimming Pool',
    descriptionAr: 'استرخوا بجانب مسبحنا الخارجي المُتحكم بدرجة حرارته مع إطلالات خلابة على البحر الأحمر.',
    descriptionEn: 'Relax by our temperature-controlled outdoor pool with stunning Red Sea views.',
    icon: '✧',
    image: '/api/marriott/rz-jedrj-spa-wet-area-20584:Classic-Hor?wid=500&fit=constrain',
    price: 'مجاناً للنزلاء',
  },
  {
    id: 'dining',
    nameAr: 'مطعم ريحانة',
    nameEn: 'Reyhana Restaurant',
    descriptionAr: 'اكتشف تجربة طعام فاخرة في جدة تقدم أطباقاً شهية من مصادر إقليمية. يفتح أبوابه طوال اليوم.',
    descriptionEn: 'Fine dining restaurant open all day with regional cuisine.',
    icon: '❖',
    image: '/api/marriott/rz-jedrj-al-ezz-2-31338?wid=500&fit=constrain',
    price: 'يبدأ من 200 ريال',
  },
  {
    id: 'beach',
    nameAr: 'الشاطئ الخاص',
    nameEn: 'Private Beach',
    descriptionAr: 'إمكانية الوصول الحصري إلى شاطئنا الخاص البكر على طول كورنيش جدة.',
    descriptionEn: 'Exclusive access to our pristine private beach along the Jeddah Corniche.',
    icon: '◆',
    image: '/api/marriott/rz-jedrj-rc-jeddah-0469:Classic-Hor?wid=500&fit=constrain',
    price: 'مجاناً للنزلاء',
  },
  {
    id: 'concierge',
    nameAr: 'خدمة الكونسيرج',
    nameEn: 'Concierge',
    descriptionAr: 'فريق الكونسيرج المتفاني يضمن أن كل لحظة من إقامتك استثنائية.',
    descriptionEn: 'Our dedicated concierge team ensures every moment of your stay is exceptional.',
    icon: '✦',
    image: '/api/marriott/rz-jedrj-front-desk-lobby-2-37252:Classic-Hor?wid=500&fit=constrain',
    price: 'متوفر على مدار الساعة',
  },
]

export const diningItems: DiningItem[] = [
  {
    id: 'reyhana',
    nameAr: 'مطعم ريحانة',
    nameEn: 'Reyhana',
    descriptionAr: 'اكتشف تجربة طعام فاخرة في جدة تقدم لك نهجاً حيوياً لمأكولات شهية من مصادر إقليمية. يقدم مطعم ريحانة الذي يفتح أبوابه طوال اليوم ألذ الأطباق على الإفطار أو الغداء أو العشاء.',
    descriptionEn: 'Fine dining with a vibrant approach to delicious regional cuisine, open all day for breakfast, lunch, and dinner.',
    image: '/api/marriott/rz-jedrj-al-ezz-2-31338:Classic-Hor?wid=600&fit=constrain',
    type: 'مطعم',
    hours: 'طوال اليوم',
    pricing: '200 - 500 ريال',
  },
  {
    id: 'karamel',
    nameAr: 'صالة كراميل',
    nameEn: 'Karamel Lounge',
    descriptionAr: 'استمتع بتناول شاي ما بعد الظهيرة في جدة في صالة البهو الفخمة التي تتيح لروادها تذوق تشكيلة فاخرة من المعجنات الشهية والكرواسون الطازج والكعك اللذيذ والشاي الأصيل عالي الجودة.',
    descriptionEn: 'Enjoy afternoon tea in the elegant lobby lounge with fine pastries, fresh croissants, and high-quality teas.',
    image: '/api/marriott/50500489-jedrj_2018_0172:Classic-Hor?wid=600&fit=constrain',
    type: 'صالة',
    hours: '8:00 صباحاً - 11:00 مساءً',
    pricing: 'يبدأ من 150 ريال',
  },
  {
    id: 'seafood',
    nameAr: 'سوق المأكولات البحرية الليلي',
    nameEn: 'Night Seafood Market',
    descriptionAr: 'استمتع بليلة المأكولات البحرية في ريحانة، حيث تلتقي الأناقة الفاخرة بأجود نكهات البحر. اختر بعناية اختيارك المفضل من المأكولات البحرية الطازجة مع بوفيه من الأطباق العالمية.',
    descriptionEn: 'Seafood night at Reyhana with fresh catches, international buffet, live entertainment, and kids activities.',
    image: '/api/marriott/rz-jedrj-flame-table-12781:Classic-Hor?wid=600&fit=constrain',
    type: 'فعالية',
    hours: 'كل يوم جمعة، 7:00 مساءً',
    pricing: '285 ريال للبالغين',
  },
  {
    id: 'in-room',
    nameAr: 'تناول الطعام داخل الغرفة',
    nameEn: 'In-Room Dining',
    descriptionAr: 'استمتع بتجربة تناول طعام فاخرة دون مغادرة غرفتك المريحة. سواءً أكنت في مزاج لتناول فطور لذيذ أو غداء أو عشاء راقٍ، قائمتنا المُعدّة بعناية تتميز بمجموعة متنوعة من الخيارات.',
    descriptionEn: 'Luxury in-room dining experience with a carefully curated menu available 24/7.',
    image: '/api/marriott/rz-jedrj-2018-0585:Classic-Hor?wid=600&fit=constrain',
    type: 'خدمة غرف',
    hours: 'على مدار الساعة',
    pricing: 'حسب الطلب',
  },
]

export const offers: Offer[] = [
  {
    id: 'summer-escape',
    titleAr: 'صيفك على البحر الأحمر',
    titleEn: 'Your Summer by the Red Sea',
    descriptionAr: 'استمتع بصيف لا يُنسى في فندق ريتز كارلتون جدة، حيث تجتمع الإقامات الاستثنائية واللحظات العائلية وتجارب الطهي المبتكرة على ضفاف البحر الأحمر. عروض حصرية على الغرف والأجنحة.',
    descriptionEn: 'Unlock Your Summer Escape with exclusive room and suite offers on the Red Sea.',
    image: '/api/marriott/jedrj-entrance-0016:Pano-Hor?wid=800&fit=constrain',
    badge: 'عرض صيفي',
  },
  {
    id: 'kids-dining',
    titleAr: 'ريتز كيدز - وجبات الأطفال',
    titleEn: 'Ritz Kids Dining',
    descriptionAr: 'اجعل تناول الطعام مع العائلة أكثر متعة. يتناول الأطفال أقل من 6 سنوات الطعام مجاناً، بينما يستمتع الأطفال من عمر 6 إلى 12 عاماً بخصم 50% في المطاعم المشاركة.',
    descriptionEn: 'Kids under 6 eat free, kids 6-12 get 50% off at participating restaurants.',
    image: '/api/marriott/rz-jedrj-al-ezz-2-31338:Classic-Hor?wid=800&fit=constrain',
    badge: 'عائلي',
  },
  {
    id: 'cooking-class',
    titleAr: 'مغامرات الطهي أيام السبت',
    titleEn: 'Saturday Cooking Adventures',
    descriptionAr: 'أطلق العنان للإبداع في المطبخ مع حصص الطهي الأسبوعية للأطفال كل يوم سبت. تشمل تحضير المعكرونة وإعداد البيتزا وتزيين الفطائر والحلويات تحت إشراف فريق الطهي.',
    descriptionEn: 'Weekly kids cooking classes every Saturday - pasta, pizza, cake decorating.',
    image: '/api/marriott/rz-jedrj-majesty-lounge-14371:Classic-Hor?wid=800&fit=constrain',
    badge: 'أطفال',
  },
  {
    id: 'wedding-summer',
    titleAr: 'عرض حفلات الزفاف الصيفية',
    titleEn: 'Summer Wedding Offer',
    descriptionAr: 'اصنع ذكريات زفاف لا تُنسى مع خصم يصل إلى 15% على احتفالك أو إقامة مجانية في أحد الفنادق الشقيقة على البحر الأحمر.',
    descriptionEn: 'Create unforgettable wedding memories with up to 15% discount or complimentary stay.',
    image: '/api/marriott/rz-jedrj-ballroom-1-42126:Feature-Hor?wid=800&fit=constrain',
    badge: 'زفاف',
  },
]

export const faqs: FAQ[] = [
  { questionAr: 'ما هي أوقات تسجيل الوصول والمغادرة؟', answerAr: 'وقت تسجيل الوصول هو 3:00 ظهراً، ووقت تسجيل المغادرة هو 12:00 مساءً. الحد الأدنى للعمر لتسجيل الوصول هو 18 عاماً.' },
  { questionAr: 'هل يسمح باصطحاب الحيوانات الأليفة؟', answerAr: 'عذراً، لا يُسمح باصطحاب الحيوانات الأليفة. يُسمح فقط بحيوانات الخدمة المساعدة.' },
  { questionAr: 'ما هي خيارات مواقف السيارات؟', answerAr: 'نوفر مواقف سيارات مجانية داخل الفندق مع خدمة صف السيارات المجانية للنزلاء.' },
  { questionAr: 'هل تتوفر خدمة واي فاي مجانية؟', answerAr: 'نعم، تتوفر خدمة واي فاي مجانية في جميع أنحاء الفندق بما في ذلك الغرف والأماكن العامة.' },
  { questionAr: 'ما هو أقرب مطار؟', answerAr: 'أقرب مطار هو مطار الملك عبدالعزيز الدولي (JED)، على بعد حوالي 31.7 كم من الفندق.' },
  { questionAr: 'ما هي طرق الدفع المقبولة؟', answerAr: 'نقبل الدفع نقداً وجميع البطاقات الائتمانية الرئيسية.' },
  { questionAr: 'هل يوجد نادي صحي؟', answerAr: 'نعم، يوجد نادي صحي فاخر للرجال مع حوض استحمام وساونا وغرفة بخار وثلاث غرف علاجية.' },
  { questionAr: 'ما هي اللغات التي يتحدثها الموظفون؟', answerAr: 'يتحدث موظفونا اللغة العربية والإنجليزية.' },
]

export const attractions: NearbyAttraction[] = [
  { nameAr: 'البلد التاريخية', nameEn: 'Al Balad', descriptionAr: 'استمتع بسحر منطقة البلد التاريخية في جدة، أحد مواقع التراث العالمي لليونسكو.', image: '/api/marriott/jedrj-jeddah-city-50771621?wid=400&fit=constrain' },
  { nameAr: 'نافورة الملك فهد', nameEn: 'King Fahd Fountain', descriptionAr: 'أعلى نافورة في العالم، تقع على مقربة من الفندق.', image: '/api/marriott/jedrj-jeddah-city-50771621?wid=400&fit=constrain' },
  { nameAr: 'كورنيش جدة', nameEn: 'Jeddah Corniche', descriptionAr: 'ممشى ساحلي جميل يمتد على طول البحر الأحمر مع مطاعم ومقاهي.', image: '/api/marriott/rz-jedrj-rc-jeddah-0469:Classic-Hor?wid=400&fit=constrain' },
  { nameAr: 'تيم لاب بوردليس جدة', nameEn: 'teamLab Borderless Jeddah', descriptionAr: 'معرض فني تفاعلي غامر في مدينة جدة.', image: '/api/marriott/rz-jedrj-kings-entrance-31349:Classic-Hor?wid=400&fit=constrain' },
]

export const galleryImages = [
  { src: '/api/marriott/jedrj-entrance-0016:Pano-Hor?wid=800&fit=constrain', altAr: 'واجهة الفندق', altEn: 'Hotel Entrance' },
  { src: '/api/marriott/rz-jedrj-rcj-lobby-13040:Classic-Hor?wid=800&fit=constrain', altAr: 'البهو الرئيسي', altEn: 'Main Lobby' },
  { src: '/api/marriott/rz-jedrj-deluxe-room-18354-16543:Classic-Hor?wid=800&fit=constrain', altAr: 'غرفة ديلوكس', altEn: 'Deluxe Room' },
  { src: '/api/marriott/rz-jedrj-executive-suite-24416:Classic-Hor?wid=800&fit=constrain', altAr: 'غرفة المعيشة - جناح', altEn: 'Suite Living Room' },
  { src: '/api/marriott/rz-jedrj-al-ezz-2-31338:Classic-Hor?wid=800&fit=constrain', altAr: 'مطعم ريحانة', altEn: 'Reyhana Restaurant' },
  { src: '/api/marriott/rz-jedrj-spa-wet-area-20584:Classic-Hor?wid=800&fit=constrain', altAr: 'المسبح', altEn: 'Swimming Pool' },
  { src: '/api/marriott/jedrj-jeddah-spa-50771598?wid=800&fit=constrain', altAr: 'النادي الصحي', altEn: 'Spa' },
  { src: '/api/marriott/rz-jedrj-gym-weight-lifting--19058-91254:Classic-Hor?wid=800&fit=constrain', altAr: 'مركز اللياقة', altEn: 'Fitness Center' },
  { src: '/api/marriott/rz-jedrj-rc-jeddah-0469:Classic-Hor?wid=800&fit=constrain', altAr: 'الشاطئ الخاص', altEn: 'Private Beach' },
  { src: '/api/marriott/rz-jedrj-royal-suite-bedroom-11347:Classic-Hor?wid=800&fit=constrain', altAr: 'الجناح الملكي', altEn: 'Royal Suite' },
  { src: '/api/marriott/50500489-jedrj_2018_0172:Classic-Hor?wid=800&fit=constrain', altAr: 'صالة كراميل', altEn: 'Karamel Lounge' },
  { src: '/api/marriott/rz-jedrj-chandelier-detaile-30508-15148:Classic-Hor?wid=800&fit=constrain', altAr: 'ثريا البهو', altEn: 'Lobby Chandelier' },
]

export const testimonials = [
  { name: 'محمد العلي', text: 'أجمل فندق في جدة. الخدمة رائعة والموقع ممتاز. سأعود بالتأكيد.', rating: 5 },
  { name: 'سارة أحمد', text: 'قضينا شهر العسل في الجناح الملكي. كانت تجربة لا تُنسى.', rating: 5 },
  { name: 'عبدالله السالم', text: 'سبا ريتز كارلتون تجربة فريدة. العلاجات ممتازة والجو هادئ.', rating: 5 },
  { name: 'نورة الفهد', text: 'الفطور في المطعم كان ولا أروع. تشكيلة واسعة وخدمة ممتازة.', rating: 4 },
]

export const hotelAmenities = [
  'مطعم', 'النادي الصحي', 'مركز اللياقة البدنية', 'خدمة غرف على مدار الساعة',
  'مركز الأعمال', 'مساحة اجتماعات', 'متجر هدايا', 'غسيل ملابس',
  'واي فاي مجاني', 'قهوة/شاي مجاني في البهو', 'مطبخ صغير', 'موقف سيارات مجاني',
  'خدمة صف سيارات', 'مصاعد', 'مكتب استقبال 24 ساعة', 'خدمة الكونسيرج',
]

export const hotelInfo = {
  addressAr: 'حي الحمراء، الكورنيش الجنوبي، صندوق بريد 13344، جدة، السعودية، 21493',
  addressEn: 'Al Hamra District, South Corniche, PO Box 13344, Jeddah, Saudi Arabia, 21493',
  phone: '05750515019',
  fax: '',
  email: 'grouthhacker@gmail.com',
  checkIn: '3:00 ظهراً',
  checkOut: '12:00 مساءً',
  minAge: 18,
  airport: 'مطار الملك عبدالعزيز الدولي',
  airportDistance: '31.7 كم',
  parking: 'مواقف سيارات مجانية داخل الفندق',
  valet: 'خدمة صف سيارات مجانية',
  languages: 'العربية، الإنجليزية',
  payment: 'نقداً، بطاقات ائتمانية',
  petPolicy: 'غير مسموح باصطحاب الحيوانات الأليفة. يُسمح بحيوانات الخدمة فقط.',
}

export const socialLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com/marriottbonvoy', icon: 'f' },
  { name: 'Instagram', url: 'https://www.instagram.com/marriottbonvoy/', icon: '◐' },
  { name: 'Twitter', url: 'https://twitter.com/marriottbonvoy', icon: '𝕏' },
  { name: 'YouTube', url: 'https://www.youtube.com/marriott', icon: '▶' },
]
