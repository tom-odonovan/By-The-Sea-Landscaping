import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { TiLocation } from 'react-icons/ti';
import { FaPhoneAlt } from 'react-icons/fa'

export const navbar = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'About',
    path: 'about',
  },
  {
    name: 'Services',
    path: 'services',
  },
  // {
  //   name: 'Gallery',
  //   path: 'gallery',
  // },
  // {
  //   name: 'Blog',
  //   path: 'blog',
  // },
  {
    name: 'Contact',
    path: 'contact',
  },
]

export const heroBtns = [
  {
    name: 'Learn More',
    path: 'about',
  },
  {
    name: 'Contact Us',
    path: 'contact',
  },
]

export const services = [
  {
    icon: {
      img: '/icons/mower-icon.svg',
      alt: 'Mower Icon',
    },
    img: '/imgs/mowing-man-wf',
    alt: 'Man mowing lawn',
    subtitle: 'Transform Your Space',
    title: 'Landscaping Services',
    text: 'Our landscaping services are designed to transform your outdoor space into a vibrant and well-maintained environment. From precise lawn mowing and edging to removing leaves and tidying up your garden, we pay attention to every detail. \nOur expert team also specializes in mulching and fertilizing to nourish your plants and promote healthy growth. With a focus on enhancing the aesthetic appeal and functionality of your landscape, we create beautiful outdoor spaces you can enjoy year-round.',
    tags: [
      'Lawn Mowing',
      'Edging',
      'Mulching',
      'Fertilizing',
    ]
  },
  {
    icon: {
      img: '/icons/trees-icon.svg',
      alt: 'Trees Icon',
    },
    img: '/imgs/hedge-trimming',
    alt: 'Man trimming hedge',
    subtitle: 'Beautiful Tree Solutions',
    title: 'Tree and Plant Care',
    text: 'We understand the importance of proper tree and plant care for a healthy and attractive landscape. Our skilled professionals provide expert hedging services to maintain the shape and density of your hedges. \nWe also offer tree trimming and removal to ensure the safety and beauty of your property. Whether you need regular pruning or assistance with tree removal, we have the knowledge and equipment to handle the task efficiently and safely.',
    tags: [
      'Hedge Trimming',
      'Tree Trimming',
      'Tree Removal',
    ]
  },
  {
    icon: {
      img: '/icons/grass-icon.svg',
      alt: 'Turf Laying Icon',
    },
    img: '/imgs/grass-texture',
    alt: 'Grass close up',
    subtitle: 'Elevate Your Yard',
    title: 'Turf Laying',
    text: 'Achieve a lush and vibrant lawn with our comprehensive turf services. We specialize in prepping and laying turf to create a fresh, even, and vibrant green carpet that enhances the beauty of your outdoor space. \nOur dedicated team ensures proper soil preparation, precise turf installation, and tailored care instructions, giving you a healthy and stunning lawn. With our expertise and attention to detail, we\'ll transform your yard into a picturesque setting that you can enjoy with family and friends.',
    tags: [
      'Turf Laying',
      'Turf Preparation',
      'Turf Care',
    ]
  },
  {
    icon: {
      img: '/icons/care-icon.svg',
      alt: 'Garden Maintenance Icon',
    },
    img: '/imgs/pressure-cleaning',
    alt: 'Man pressure cleaning',
    subtitle: 'Maintain Your Oasis',
    title: 'Garden Maintenance',
    text: 'Maintaining a well-kept outdoor space requires regular maintenance. Our maintenance services cover essential tasks such as weed control, ensuring that unwanted weeds don\'t compete with your plants for nutrients and space. \nWe also provide pressure washing to revitalize your outdoor surfaces, removing dirt, grime, and stains. Additionally, our pool cleaning service guarantees crystal-clear waters, creating a welcoming and refreshing oasis right in your backyard.',
    tags: [
      'Weed Control',
      'Pressure Washing',
      'Pool Cleaning',
    ]
  }
];

export const guarantee = [
  {
    title: 'Affordable Prices',
    text: 'We believe that a beautiful garden doesn\'t have to come with a hefty price tag. We offer high quality landscaping services at unbeatable prices.',
  },
  {
    title: 'Personalized Service',
    text: 'We understand that every client is unique. We take the time to understand your preferences and collaborate closely with you throughout the entire process.',
  },
  {
    title: 'Attention to Detail',
    text: 'We believe that the key to a stunning landscape lies in the details. We pay meticulous attention to every aspect of our work, from the precise edging of your lawn to the careful selection of the right plants and materials for your garden.',
  }
];

export const latestProjects = [
  {
    id: 'project-1',
    imgUrl: '/imgs/projects/unknown-03.jpg',
    title: 'Narrabeen',
  },
  {
    id: 'project-2',
    imgUrl: '/imgs/projects/unknown-02.jpg',
    title: 'Newport',
  },
  {
    id: 'project-3',
    imgUrl: '/imgs/projects/elanora-02.jpeg',
    title: 'Elanora',
  },
  {
    id: 'project-4',
    imgUrl: '/imgs/projects/monavale.jpg',
    title: 'Monavale',
  },
  {
    id: 'project-5',
    imgUrl: '/imgs/projects/unknown-01.jpg',
    title: 'Church Point',
  },
];

export const reviews = [
  {
    id: "review-1",
    avatar: "",
    name: "Sue Skippen",
    date: "2025-08-08T00:00:00.000Z",
    content: `"Jake and his team did an amazing job totally revamping our property to get it ready for sale. We were so impressed and they were so professional we could not be happier and would not have any hesitation in recommending Jake to anyone requiring his services."`,
    rating: 5,
  },
  {
    id: "review-2",
    avatar: "",
    name: "Taylor Grogin",
    date: "2024-12-08T00:00:00.000Z",
    content: `"Jake and his team did an exceptional job replacing a patch of turf in my yard back in May. The area needed more than just a simple turf replacement—because of a land drop, they had to raise and level the underlay. I know this couldn’t have been easy with the incline, but they handled it seamlessly.\n\Even with the cooler weather when they laid it, the lawn took to the ground quickly and rooted well within just a few weeks. Now that we’re into warmer weather, I can see the full results, and the entire lawn looks fluid, lush, and healthy.\n\nIt was a no-fuss job at a fair price, and the results speak for themselves. Thank you, Jake and team, for your hard work! Highly recommended."`,
    rating: 5,
  },
  {
    id: "review-3",
    avatar: "",
    name: "John Miller",
    date: "2024-07-14T00:00:00.000Z",
    content: `"Jake and the guys at By The Sea Landscaping did an amazing job of installing our new poolside garden beds. They firstly provided great advice about our project, plant choices and all other considerations. Their quote was reasonable and exactly as explained. And the installation itself was swift, professional and seamless. Aside from all else, they are just bloody good blokes. I\'ll be using By The Sea again for any future landscaping projects - and wholeheartedly recommend their services to anyone needing a well-priced garden project, expertly delivered. Thanks Jake and team!"`,
    rating: 5,
  },
  {
    id: "review-4",
    avatar: "",
    name: "Dani",
    date: "2023-09-20T00:00:00.000Z",
    content: `"Jake and his team of landscapers worked tirelessly and quickly to remove the Lantana from the backyard of our new home. He then created a beautiful hedge of Lilly Pilly trees with a built in irrigation system. He made a rockery around our large Norfolk Pine tree and planted some hardy plants to withstand the coastal conditions. He still comes back and maintains our hedges every few months for us! We couldnt be happier with the work done by By the Sea Landscaping and highly recommend them to anyone requiring landscaping/hedging/garden makeover. Thanks again Jake."`,
    rating: 5,
  },
  {
    id: "review-5",
    avatar: "",
    name: "Tom Culver",
    date: "2024-02-12T00:00:00.000Z",
    content: `"These guys are the best. We've been though a bunch of different companies over the year but have never found one that can deliver to the right standard. Jake and his team are great all round - accurate, friendly, hard working and know their stuff! Highly recommend."`,
    rating: 5,
  },
  {
    id: "review-6",
    avatar: "",
    name: "Rebecca Santos",
    date: "2024-01-06T00:00:00.000Z",
    content: `"The most amazing team - hardworking, friendly, considered and thorough. Absolutely old school work ethic and a real pleasure to meet and have help fix up my garden. Hire them, you wont regret it!"`,
    rating: 5,
  },
  { id: "review-7",
    avatar: "",
    name: "Sandy Peacock",
    date: "2024-05-07T00:00:00.000Z",
    content: `"Best thing we ever did was hand over the garden to By The Sea. Jake and his crew are knowledgeable, energetic and thorough. They look after lawnmowing, tree trimming, pest treatment and other maintenance. And I don't have to go up ladders anymore!"`,
    rating: 5,
  },
  {
    id: "review-8",
    avatar: "",
    name: "Casey O'Brien",
    date: "2023-08-26T00:00:00.000Z",
    content: `"Highly recommend By the Sea Landscaping! Jake and his team pulled up some pavers and laid grass for us, they were very efficient and professional!"`,
    rating: 5,
  },
  {
    id: "review-9",
    avatar: "",
    name: "Mia",
    date: "2024-05-20T00:00:00.000Z",
    content: `"Jake and his team offer a very professional service and are extremely efficient with attention to detail. Highly recommend."`,
    rating: 5,
  },
  {
    id: "review-10",
    avatar: "",
    name: "Martin Jakovics",
    date: "2024-05-10T00:00:00.000Z",
    content: `"Jake and his team do a great job keeping our garden looking good."`,
    rating: 5,
  },
];

export const blog = [
  {
    id: 'blog-1',
    date: 'May 20, 2023',
    imgUrl: '/imgs/vertical-garden.jpg',
    title: 'Making The Most of Small Spaces',
    subtitle: 'Landscaping Ideas for Compact Yards',
    sections: [
      {
        heading: '',
        content: 'Welcome to our comprehensive guide on landscaping ideas for compact yards. If you have a small outdoor space, don\'t fret! With the right design strategies and creative thinking, you can transform your limited yard into a beautiful and functional oasis.In this article, we\'ll share expert tips and inspiring ideas to maximize the potential of small spaces. Whether you\'re dealing with a tiny backyard or a narrow strip of land, these landscaping solutions will help you make the most of what you have.',
      },
      {
        heading: '1. Plan with Purpose',
        content: 'Before diving into any landscaping project, it\'s crucial to plan with purpose.Assess your available space and consider how you want to use it. Do you envision a cozy seating area, a vibrant garden, or a combination of both? Understanding your goals will guide your design decisions and ensure efficient space utilization. Sketch a rough layout and take measurements to visualize how different elements can fit together harmoniously. Remember to consider the scale and proportions of features to maintain a balanced and inviting atmosphere.',
      },
      {
        heading: '2. Create Layers and Levels',
        content: 'One effective way to maximize a small yard is by creating layers and levels. Varying the heights of your landscape elements adds visual interest and gives the illusion of more space. For instance, construct raised beds or planters along the perimeter, filling them with colorful flowers and foliage. Introduce vertical elements such as trellises, pergolas, or hanging baskets to draw the eye upward. These vertical features not only provide additional planting space but also add depth to the overall design. Utilize different flooring materials, like stepping stones or decking, to demarcate distinct zones and create a sense of separation within the yard.',
      },
      {
        heading: '3. Opt for Space-Saving Plant Selections',
        content: `When choosing plants for a small yard, opt for space-saving varieties that won't overwhelm the space. Select compact shrubs, dwarf trees, and petite perennials that maintain their shape and size without sprawling out of control. Consider using ornamental grasses or tall, slender plants to provide vertical interest while occupying minimal ground space. Utilize hanging planters or vertical gardens for trailing or climbing plants to maximize vertical greenery. Additionally, incorporating container gardens allows for mobility and flexibility, letting you easily rearrange or replace plants as desired.`,
      },
      {
        heading: '4. Embrace Vertical Gardening',
        content: `Vertical gardening is a game-changer for small yards. Utilize vertical surfaces like walls, fences, or even balcony railings to create stunning green walls or herb gardens. Install modular vertical garden systems or build custom trellises to support climbing plants. This not only saves valuable ground space but also adds a lush, vibrant backdrop to your outdoor area. Consider using pocket planters or vertical hanging pouches to grow herbs, succulents, or trailing flowers, adding a touch of greenery without sacrificing space. Vertical gardening not only maximizes your planting capacity but also adds a visually appealing focal point to the landscape.`,
      },
      {
        heading: '5. Think Multi-Functional',
        content: `To make the most of a compact yard, think multi-functional when choosing landscape elements. Incorporate furniture that doubles as storage, such as benches with built-in compartments or ottomans with hidden storage space. Use raised beds or seating walls with integrated planters to combine seating and greenery. Designate areas that can serve multiple purposes, such as a patio space that can transform into an outdoor dining area or a play area for children. By maximizing the functionality of each element, you can optimize the use of your limited space.`,
      },
      {
        heading: '',
        content: `With these landscaping ideas for compact yards, you can create a stunning outdoor space regardless of its size. By planning with purpose, utilizing layers and levels, selecting space-saving plants, embracing vertical gardening, and incorporating multi-functional elements, you'll transform your small yard into a beautiful and functional haven. Remember, small spaces can still make a big impact with thoughtful design and creativity. Get inspired, unleash your imagination, and enjoy the process of transforming your limited yard into a personal oasis.`,
      }
    ],
  },
  {
    id: 'blog-2',
    date: 'May 15, 2023',
    imgUrl: '/imgs/sprinkler.jpg',
    title: "Mastering the Basics: Lawn Care 101",
    subtitle: "A Comprehensive Guide to Achieving a Healthy and Vibrant Lawn",
    sections: [
      {
        heading: "",
        content: "Maintaining a lush and vibrant lawn requires proper care and attention. From mowing to watering and fertilizing, understanding the basics of lawn care is essential for achieving a beautiful outdoor space. In this comprehensive guide, we will take you through the fundamental practices of lawn care, providing expert tips and insights to help you achieve a healthy and vibrant lawn that will be the envy of the neighborhood."
      },
      {
        heading: "1. Mowing",
        content: "Mowing your lawn correctly is crucial for its overall health and appearance. Set your mower blades to the appropriate height, typically between 2.5 to 3 inches. Regularly mow the grass, ensuring you never remove more than one-third of the blade's height in a single mowing session. This practice prevents stress on the grass and promotes strong root development."
      },
      {
        heading: "2. Watering",
        content: "Proper watering is essential for the health of your lawn. Water deeply and infrequently, aiming for approximately 1 inch of water per week, including rainfall. Watering deeply encourages the grass roots to grow deeper into the soil, making the lawn more resilient to drought. Watering in the early morning helps minimize water evaporation and allows the grass to dry before evening, reducing the risk of fungal diseases."
      },
      {
        heading: "3. Fertilizing",
        content: "Regular fertilization provides the necessary nutrients for your lawn to thrive. Begin by conducting a soil test to determine the specific nutrient needs of your lawn. Choose a high-quality, slow-release fertilizer that matches those requirements. Apply the fertilizer according to the recommended schedule, typically in early spring and fall. Avoid over-fertilizing, as it can lead to excessive growth and weaken the grass."
      },
      {
        heading: "4. Weed Control",
        content: "Weeds can quickly invade a lawn, competing with grass for resources and spoiling its appearance. Implement an effective weed control strategy, which includes regular mowing, proper watering, and applying pre-emergent herbicides in early spring to prevent weed seeds from germinating. For existing weeds, use selective herbicides that target specific weed types while sparing the grass."
      },
      {
        heading: "5. Aeration",
        content: "Compacted soil can hinder the healthy growth of grass roots. Regularly aerate your lawn, especially in high-traffic areas, to alleviate soil compaction. Core aerators remove small plugs of soil, allowing air, water, and nutrients to penetrate the root zone. This process promotes better nutrient absorption and root development."
      },
      {
        heading: "6. Overseeding",
        content: "Over time, lawns may develop thin or bare patches. Overseeding is the process of spreading grass seed over existing turf to fill in these areas and promote a denser lawn. Before overseeding, prepare the soil by raking and removing debris. Choose a grass seed blend that matches your existing lawn and follow the recommended seeding rates. Water the overseeded areas regularly to keep the soil moist for optimal seed germination."
      },
      {
        heading: "7. Pest and Disease Management",
        content: "Monitor your lawn for signs of pests and diseases, such as brown patches, chewed grass blades, or unusual discoloration. Proper cultural practices, such as regular mowing, watering, and fertilizing, contribute to the overall health of the lawn and make it more resistant to pests and diseases. If necessary, consult with a professional for targeted pest or disease control measures."
      },
      {
        heading: "",
        content: "By mastering the basics of lawn care, you can transform your outdoor space into a healthy and vibrant oasis. Regular mowing, proper watering and fertilizing, effective weed control, aeration, overseeding, and vigilant pest and disease management are the keys to achieving a beautiful lawn. Remember, consistency and patience are essential. With dedication and adherence to these practices, you can enjoy a lush and inviting lawn that becomes the pride of your home."
      },
    ],
  }
]

export const socials = [
  {
    name: 'instagram',
    icon: BsInstagram,
    href: 'https://www.instagram.com/bythesealandscaping/',
  },
  {
    name: 'facebook',
    icon: FaFacebookF,
    href: 'https://www.facebook.com/bythesealandscapes',
  },
  {
    name: 'linkedin',
    icon: FaLinkedinIn,
    href: '#',
  },
  {
    name: 'email',
    icon: MdEmail,
    href: 'mailto:bythesealandscapes@gmail.com'
  }
];

export const contact = [
  {
    name: 'location',
    icon: TiLocation,
    content: 'Northern Beaches, Sydney',
    url: 'https://goo.gl/maps/uWJAxEnVrjFuUeSH7'
  },
  {
    name: 'email',
    icon: MdEmail,
    content: 'bythesealandscapes@gmail.com',
    url: 'mailto:bythesealandscapes@gmail.com'
  },
  {
    name: 'phone',
    icon: FaPhoneAlt,
    content: '0439 439 391',
    url: 'tel:0439439391'
  }
];
