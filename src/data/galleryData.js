/**
 * galleryData.js
 * Curated editorial catalog of all media with intentional layout roles:
 * - 'hero-feature': Full-width / 2x2 centerpiece with ambient motion
 * - 'landscape': Wide 16:9 panoramic display
 * - 'portrait': Editorial tall 3:4 aspect
 * - 'standard': Balanced 4:3 card
 */

export const galleryFolders = [
  {
    id: 'folder-1',
    name: 'Folder 01',
    tag: 'Field Operations & Energy',
    items: [
      {
        id: 'f1-v1',
        type: 'video',
        src: '/gallery/folder-1/WhatsApp_Video_2026-10-16_at_7.22.31_PM.mp4',
        layout: 'hero-feature',
        aspect: 'panoramic'
      },
      {
        id: 'f1-i1',
        type: 'image',
        src: '/gallery/folder-1/WhatsApp_Image_2026-10-16_at_7.07.30_PM.jpeg',
        layout: 'portrait',
        aspect: 'portrait'
      },
      {
        id: 'f1-i2',
        type: 'image',
        src: '/gallery/folder-1/WhatsApp_Image_2026-10-16_at_7.07.44_PM.jpeg',
        layout: 'standard',
        aspect: 'standard'
      },
      {
        id: 'f1-i3',
        type: 'image',
        src: '/gallery/folder-1/WhatsApp_Image_2026-10-16_at_7.07.48_PM.jpeg',
        layout: 'standard',
        aspect: 'standard'
      },
      {
        id: 'f1-i4',
        type: 'image',
        src: '/gallery/folder-1/WhatsApp_Image_2026-10-16_at_7.22.32_PM.jpeg',
        layout: 'landscape',
        aspect: 'landscape'
      },
      {
        id: 'f1-i5',
        type: 'image',
        src: '/gallery/folder-1/WhatsApp_Image_2026-10-16_at_7.22.33_PM.jpeg',
        layout: 'landscape',
        aspect: 'landscape'
      },
      {
        id: 'f1-i6',
        type: 'image',
        src: '/gallery/folder-1/WhatsApp_Image_2026-10-16_at_7.22.33_PM_1.jpeg',
        layout: 'standard',
        aspect: 'standard'
      }
    ]
  },
  {
    id: 'folder-2',
    name: 'Folder 02',
    tag: 'High-Voltage Grid & Substation',
    items: [
      {
        id: 'f2-v1',
        type: 'video',
        src: '/gallery/folder-2/WhatsApp_Video_2026-10-16_at_7.18.36_PM.mp4',
        layout: 'hero-feature',
        aspect: 'panoramic'
      },
      {
        id: 'f2-v2',
        type: 'video',
        src: '/gallery/folder-2/WhatsApp_Video_2026-10-16_at_7.18.40_PM.mp4',
        layout: 'landscape',
        aspect: 'landscape'
      },
      {
        id: 'f2-v3',
        type: 'video',
        src: '/gallery/folder-2/WhatsApp_Video_2026-10-16_at_7.18.43_PM.mp4',
        layout: 'landscape',
        aspect: 'landscape'
      },
      {
        id: 'f2-v4',
        type: 'video',
        src: '/gallery/folder-2/WhatsApp_Video_2026-10-16_at_7.22.15_PM.mp4',
        layout: 'standard',
        aspect: 'standard'
      },
      {
        id: 'f2-v5',
        type: 'video',
        src: '/gallery/folder-2/WhatsApp_Video_2026-10-16_at_7.22.17_PM.mp4',
        layout: 'standard',
        aspect: 'standard'
      },
      {
        id: 'f2-i1',
        type: 'image',
        src: '/gallery/folder-2/WhatsApp_Image_2026-10-16_at_7.22.19_PM.jpeg',
        layout: 'landscape',
        aspect: 'landscape'
      }
    ]
  },
  {
    id: 'folder-3',
    name: 'Folder 03',
    tag: 'Facility & Cleanroom Sanitation',
    items: [
      {
        id: 'f3-i1',
        type: 'image',
        src: '/gallery/folder-3/WhatsApp_Image_2026-10-16_at_7.22.22_PM.jpeg',
        layout: 'hero-feature',
        aspect: 'panoramic'
      },
      {
        id: 'f3-i2',
        type: 'image',
        src: '/gallery/folder-3/WhatsApp_Image_2026-10-16_at_7.22.24_PM.jpeg',
        layout: 'standard',
        aspect: 'standard'
      },
      {
        id: 'f3-i3',
        type: 'image',
        src: '/gallery/folder-3/WhatsApp_Image_2026-10-16_at_7.22.26_PM.jpeg',
        layout: 'standard',
        aspect: 'standard'
      },
      {
        id: 'f3-i4',
        type: 'image',
        src: '/gallery/folder-3/WhatsApp_Image_2026-10-16_at_7.22.28_PM.jpeg',
        layout: 'portrait',
        aspect: 'portrait'
      },
      {
        id: 'f3-i5',
        type: 'image',
        src: '/gallery/folder-3/WhatsApp_Image_2026-10-16_at_7.22.29_PM.jpeg',
        layout: 'portrait',
        aspect: 'portrait'
      }
    ]
  },
  {
    id: 'folder-4',
    name: 'Folder 04',
    tag: 'Workforce Assembly & Field Execution',
    items: [
      {
        id: 'f4-i1',
        type: 'image',
        src: '/gallery/folder-4/WhatsApp_Image_2026-10-16_at_7.22.35_PM.jpeg',
        layout: 'portrait',
        aspect: 'portrait'
      },
      {
        id: 'f4-i2',
        type: 'image',
        src: '/gallery/folder-4/WhatsApp_Image_2026-10-16_at_7.22.36_PM.jpeg',
        layout: 'landscape',
        aspect: 'landscape'
      },
      {
        id: 'f4-i3',
        type: 'image',
        src: '/gallery/folder-4/WhatsApp_Image_2026-10-16_at_7.22.38_PM.jpeg',
        layout: 'landscape',
        aspect: 'landscape'
      },
      {
        id: 'f4-i4',
        type: 'image',
        src: '/gallery/folder-4/WhatsApp_Image_2026-10-16_at_7.22.40_PM.jpeg',
        layout: 'hero-feature',
        aspect: 'panoramic'
      },
      {
        id: 'f4-i5',
        type: 'image',
        src: '/gallery/folder-4/WhatsApp_Image_2026-10-16_at_7.22.42_PM.jpeg',
        layout: 'standard',
        aspect: 'standard'
      },
      {
        id: 'f4-i6',
        type: 'image',
        src: '/gallery/folder-4/WhatsApp_Image_2026-10-16_at_7.22.43_PM.jpeg',
        layout: 'standard',
        aspect: 'standard'
      },
      {
        id: 'f4-i7',
        type: 'image',
        src: '/gallery/folder-4/WhatsApp_Image_2026-10-16_at_7.22.45_PM.jpeg',
        layout: 'landscape',
        aspect: 'landscape'
      },
      {
        id: 'f4-i8',
        type: 'image',
        src: '/gallery/folder-4/WhatsApp_Image_2026-10-16_at_7.22.46_PM.jpeg',
        layout: 'portrait',
        aspect: 'portrait'
      }
    ]
  },
  {
    id: 'folder-5',
    name: 'Folder 05',
    tag: 'Campus Turnkey Handover',
    items: [
      {
        id: 'f5-i1',
        type: 'image',
        src: '/gallery/folder-5/WhatsApp_Image_2026-10-16_at_7.22.47_PM.jpeg',
        layout: 'hero-feature',
        aspect: 'panoramic'
      },
      {
        id: 'f5-i2',
        type: 'image',
        src: '/gallery/folder-5/WhatsApp_Image_2026-10-16_at_7.22.48_PM.jpeg',
        layout: 'standard',
        aspect: 'standard'
      },
      {
        id: 'f5-i3',
        type: 'image',
        src: '/gallery/folder-5/WhatsApp_Image_2026-10-16_at_7.22.50_PM.jpeg',
        layout: 'standard',
        aspect: 'standard'
      },
      {
        id: 'f5-i4',
        type: 'image',
        src: '/gallery/folder-5/WhatsApp_Image_2026-10-16_at_7.22.52_PM.jpeg',
        layout: 'portrait',
        aspect: 'portrait'
      },
      {
        id: 'f5-i5',
        type: 'image',
        src: '/gallery/folder-5/WhatsApp_Image_2026-10-16_at_7.22.54_PM.jpeg',
        layout: 'portrait',
        aspect: 'portrait'
      }
    ]
  }
];

// Rich curated layout sequence for global view
export const allCuratedMedia = [
  // Block 1: Cinematic Hero Video + Balanced Side Images
  {
    id: 'c-1',
    type: 'video',
    src: '/gallery/folder-2/WhatsApp_Video_2026-10-16_at_7.18.36_PM.mp4',
    layout: 'hero-feature',
    aspect: 'panoramic'
  },
  {
    id: 'c-2',
    type: 'image',
    src: '/gallery/folder-1/WhatsApp_Image_2026-10-16_at_7.07.30_PM.jpeg',
    layout: 'portrait',
    aspect: 'portrait'
  },
  {
    id: 'c-3',
    type: 'image',
    src: '/gallery/folder-1/WhatsApp_Image_2026-10-16_at_7.07.44_PM.jpeg',
    layout: 'standard',
    aspect: 'standard'
  },

  // Block 2: Dual Landscape Flow
  {
    id: 'c-4',
    type: 'video',
    src: '/gallery/folder-2/WhatsApp_Video_2026-10-16_at_7.18.40_PM.mp4',
    layout: 'landscape',
    aspect: 'landscape'
  },
  {
    id: 'c-5',
    type: 'image',
    src: '/gallery/folder-1/WhatsApp_Image_2026-10-16_at_7.22.32_PM.jpeg',
    layout: 'landscape',
    aspect: 'landscape'
  },
  {
    id: 'c-6',
    type: 'image',
    src: '/gallery/folder-4/WhatsApp_Image_2026-10-16_at_7.22.35_PM.jpeg',
    layout: 'portrait',
    aspect: 'portrait'
  },

  // Block 3: Centerpiece Video 2
  {
    id: 'c-7',
    type: 'video',
    src: '/gallery/folder-2/WhatsApp_Video_2026-10-16_at_7.18.43_PM.mp4',
    layout: 'hero-feature',
    aspect: 'panoramic'
  },
  {
    id: 'c-8',
    type: 'image',
    src: '/gallery/folder-3/WhatsApp_Image_2026-10-16_at_7.22.22_PM.jpeg',
    layout: 'standard',
    aspect: 'standard'
  },
  {
    id: 'c-9',
    type: 'image',
    src: '/gallery/folder-3/WhatsApp_Image_2026-10-16_at_7.22.24_PM.jpeg',
    layout: 'standard',
    aspect: 'standard'
  },

  // Block 4: Video Trio with Clean Architectural Lines
  {
    id: 'c-10',
    type: 'video',
    src: '/gallery/folder-2/WhatsApp_Video_2026-10-16_at_7.22.15_PM.mp4',
    layout: 'landscape',
    aspect: 'landscape'
  },
  {
    id: 'c-11',
    type: 'video',
    src: '/gallery/folder-2/WhatsApp_Video_2026-10-16_at_7.22.17_PM.mp4',
    layout: 'landscape',
    aspect: 'landscape'
  },
  {
    id: 'c-12',
    type: 'image',
    src: '/gallery/folder-1/WhatsApp_Image_2026-10-16_at_7.07.48_PM.jpeg',
    layout: 'portrait',
    aspect: 'portrait'
  },

  // Block 5: Hero Video 3
  {
    id: 'c-13',
    type: 'video',
    src: '/gallery/folder-1/WhatsApp_Video_2026-10-16_at_7.22.31_PM.mp4',
    layout: 'hero-feature',
    aspect: 'panoramic'
  },
  {
    id: 'c-14',
    type: 'image',
    src: '/gallery/folder-2/WhatsApp_Image_2026-10-16_at_7.22.19_PM.jpeg',
    layout: 'standard',
    aspect: 'standard'
  },
  {
    id: 'c-15',
    type: 'image',
    src: '/gallery/folder-3/WhatsApp_Image_2026-10-16_at_7.22.26_PM.jpeg',
    layout: 'standard',
    aspect: 'standard'
  },

  // Block 6: Rhythmic Mosaic
  {
    id: 'c-16',
    type: 'image',
    src: '/gallery/folder-3/WhatsApp_Image_2026-10-16_at_7.22.28_PM.jpeg',
    layout: 'portrait',
    aspect: 'portrait'
  },
  {
    id: 'c-17',
    type: 'image',
    src: '/gallery/folder-3/WhatsApp_Image_2026-10-16_at_7.22.29_PM.jpeg',
    layout: 'portrait',
    aspect: 'portrait'
  },
  {
    id: 'c-18',
    type: 'image',
    src: '/gallery/folder-4/WhatsApp_Image_2026-10-16_at_7.22.36_PM.jpeg',
    layout: 'landscape',
    aspect: 'landscape'
  },
  {
    id: 'c-19',
    type: 'image',
    src: '/gallery/folder-4/WhatsApp_Image_2026-10-16_at_7.22.38_PM.jpeg',
    layout: 'landscape',
    aspect: 'landscape'
  },
  {
    id: 'c-20',
    type: 'image',
    src: '/gallery/folder-4/WhatsApp_Image_2026-10-16_at_7.22.40_PM.jpeg',
    layout: 'standard',
    aspect: 'standard'
  },
  {
    id: 'c-21',
    type: 'image',
    src: '/gallery/folder-4/WhatsApp_Image_2026-10-16_at_7.22.42_PM.jpeg',
    layout: 'standard',
    aspect: 'standard'
  },
  {
    id: 'c-22',
    type: 'image',
    src: '/gallery/folder-4/WhatsApp_Image_2026-10-16_at_7.22.43_PM.jpeg',
    layout: 'standard',
    aspect: 'standard'
  },
  {
    id: 'c-23',
    type: 'image',
    src: '/gallery/folder-4/WhatsApp_Image_2026-10-16_at_7.22.45_PM.jpeg',
    layout: 'landscape',
    aspect: 'landscape'
  },
  {
    id: 'c-24',
    type: 'image',
    src: '/gallery/folder-4/WhatsApp_Image_2026-10-16_at_7.22.46_PM.jpeg',
    layout: 'portrait',
    aspect: 'portrait'
  },
  {
    id: 'c-25',
    type: 'image',
    src: '/gallery/folder-5/WhatsApp_Image_2026-10-16_at_7.22.47_PM.jpeg',
    layout: 'standard',
    aspect: 'standard'
  },
  {
    id: 'c-26',
    type: 'image',
    src: '/gallery/folder-5/WhatsApp_Image_2026-10-16_at_7.22.48_PM.jpeg',
    layout: 'standard',
    aspect: 'standard'
  },
  {
    id: 'c-27',
    type: 'image',
    src: '/gallery/folder-5/WhatsApp_Image_2026-10-16_at_7.22.50_PM.jpeg',
    layout: 'standard',
    aspect: 'standard'
  },
  {
    id: 'c-28',
    type: 'image',
    src: '/gallery/folder-5/WhatsApp_Image_2026-10-16_at_7.22.52_PM.jpeg',
    layout: 'portrait',
    aspect: 'portrait'
  },
  {
    id: 'c-29',
    type: 'image',
    src: '/gallery/folder-5/WhatsApp_Image_2026-10-16_at_7.22.54_PM.jpeg',
    layout: 'portrait',
    aspect: 'portrait'
  },
  {
    id: 'c-30',
    type: 'image',
    src: '/gallery/folder-1/WhatsApp_Image_2026-10-16_at_7.22.33_PM.jpeg',
    layout: 'landscape',
    aspect: 'landscape'
  },
  {
    id: 'c-31',
    type: 'image',
    src: '/gallery/folder-1/WhatsApp_Image_2026-10-16_at_7.22.33_PM_1.jpeg',
    layout: 'standard',
    aspect: 'standard'
  }
];
