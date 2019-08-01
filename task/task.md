Format for architect data JSON

  lang: 'RU_BY_EN'
  path: '/PATH_TO_URL',
  name: 'NAME_AND_SURNAME',
  date: 'DATE_OF_BIRTH - DATE OF DIE',
  pic: 'PIC',
  video: 'PATH_TO_VIDEO_OR_TAG_YOUTUBE',
  birthPlace: 'PLACE OF BIRTH',
  description: 'small text with description',
  timelineData: [
    {
      date: 'date',
      text: 'timelineText',
    }
  ],
  mapData:{
	Object with needed params (coordinate). ex:
	 title: 'Бесарабскі рынак у Кіеве',
      width: 50.44242145,
      length: 30.52161393,
      date: '1910—1912',
  }
  
  For each architects need dir with images for gallery(5-10 items)