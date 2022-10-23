import React, {createContext, useState} from 'react'
export const store = createContext();

const Blog = (props) => {
    const [data, setData] = useState([
        {
            "id": "1",
            "title": "Kerala: God's Own Country",
            "description": "Kerala Luxury Houseboat is located in the calm, enchanting waters of the popular Alappuzha River. The town of Alappuzha, known as the Venice of the East, is rich with its numerous networks of wonderful waterways. ",
            "category": "Travel",
            "date": "June 20, 2022",
            "image": "https://th.bing.com/th/id/OIP.dWvxewZj1UqTr0Fc3XVT_gHaEK?w=291&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": "2",
          "title": "Karnataka: Muradeshwara Beach",
          "description": "The Murudeshwar beach is a major tourist attraction in Karnataka. Surrounded by gentle hills and lush green foliage, this beach is always bustling with activity. The beauty of this place is enhanced by the coconut trees which are indigenous to this location.",
          "category": "Travel",
          "date": "June 20, 2022",
          "image": "https://www.mustvisitplace.com/wp-content/uploads/2019/03/Murudeshwar_beach.jpg"
      }, 
       {
        "id": "3",
        "subCategory": "['frontend', 'ui/ux', 'design']",
        "authorName": 'John',
        "authorAvatar": 'https://www.bing.com/th?id=OIP.Nbyv0ZqbRVe5csz5bMNKbAHaHa&w=143&h=160&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
        "title": "Cryptography",
        "description": "Cryptography is technique of securing information and communications through use of codes so that only those person for whom the information is intended can understand it and process it.",
        "category": "Technology",
        "date": "June 20, 2022",
        "image": "https://th.bing.com/th/id/OIP.5gv6QjT7hM_FT6XqOnxRHwHaEA?pid=ImgDet&rs=1"
    },
    {
      "id": "4",
      "title": "BlockChain",
      "description": "A blockchain is a type of Digital Ledger Technology (DLT) that consists of growing list of records, called blocks, that are securely linked together using cryptography.",
      "category": "Technology",
      "date": "June 20, 2022",
      "image": "https://d3fzkptff6t8wr.cloudfront.net/wp-content/uploads/2018/10/27165754/blockchain_social-sfvrsn17ad31a2_0.jpg"
  }, 
  {
    "id": "5",
      "title": "Snacks Food: Samosa",
      "description": "Samosa in all its glory-best served piping hot, accompanied by chutney. The Indian samosa is arguably the most recognizable and widely-available Indian food there is. ",
      "category": "Food",
      "date": "June 20, 2022",
      "image": "https://live.staticflickr.com/5702/31078600701_812bd6aa88_b.jpg"
  },
{
  "id": "6",
      "title": "Food: Puri Channa Masala",
      "description": "This Punjabi Chana Masala, Naturally vegan and packed with healthy minerals, protein and fiber, this delicious vegetarian meal can be ready in just 45 minutes minus the soaking time of chickpeas.",
      "category": "Food",
      "date": "June 20, 2022",
      "image": "https://images.thrillophilia.com/image/upload/s--SQVJGbU0--/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/137/129/original/1585831253_Rishikesh_10.jpg.jpg?1585831253",
      
},
{
  "id": "7",
  "title": "Upcoming Movie 2023:  Pathaan",
  "description": "RAW Agent codenamed Pathaan takes on a menacing villain who is hell bent on ripping apart India's security apparatus.",
  "category": "Bollywood",
  "date": "June 20, 2022",
  "image": "https://cdn.headlinesoftoday.com/wp-content/uploads/2021/02/pathan-feature-750x430.jpg"
}, 
{
"id": "8",
  "title": " Movie Review: Brahmastra Part One Shiva ",
  "description": "A section of moviegoers have hailed the stunning visuals, others bashed the film for not living up to the expectations. ",
  "category": "Bollywood",
  "date": "June 20, 2022",
  "image": "https://www.tollywood.net/wp-content/uploads/2022/09/Brahmastra-8-days-AP-TS-Collections-Break-up.jpg"
},
{
  "id": "9",
      "title": "Battle Rope Exercises",
      "description": "Swinging battle ropes requires your heart to quickly pump blood to all your working muscles.",
      "category": "Fitness",
      "date": "June 20, 2022",
      "image": "https://media.sportsmatik.com/misc/24_1504859861_34320.jpg"
},
{
  "id": "10",
  "title": "Plyometric Workout",
  "description": "Begin in a high-plank position. Jump the feet forward and land the body into a squat position. Draw the elbows close to the knees. Jump the body back into a high plank and repeat. ",
  "category": "Fitness",
  "date": "June 20, 2022",
  "image": "https://acewebcontent.azureedge.net/expert-articles/2016/03/2016-03-15-plyometric-08.jpg"
}, 
{
  "id": "11",
  "title": "Hyderabad Biryani",
  "description": "Hyderabadi biryani is one of the most popular biryani recipe. Create it at home to make a mark at your dinner party! Half boiled rice layered with fried onions, mint",
  "category": "Food",
  "date": "September 2, 2022",
  "image": "https://4.bp.blogspot.com/-VAz98JXZW6A/Ww6SuhI9uII/AAAAAAAAAho/9phhquy1fYQ5JegCkbR49l9lqpPgElY9wCK4BGAYYCw/s1600/Hyderabadi%2Bbiryan.jpg"
},
{
  "id": "12",
  "title": "Jumping Jack",
  "description": " If you haven’t done these since high school gym class, you’re missing out! This equipment-free activity can get your heart rate up in no time. Plus, they’re easy to do from anywhere.",
  "category": "Fitness",
  "date": "September 2, 2022",
  "image": "https://sweatonfitness.com/wp-content/uploads/2020/03/1000-Jumping-Jack-burning-belly-fat--788x788.png"
},
{
  "id": "13",
  "title": "Taj Mahal",
  "description": " India's Taj Mahal reopens as new infections slow Travel 8 of the most amazing views in the world Asia Crowds flock to Taj Mahal as Covid restrictions lifted Asia No crowds as Taj Mahal reopens after 6 months",
  "category": "Travel",
  "date": "September 2, 2022",
  "image": "https://lp-cms-production.imgix.net/news/2018/01/taj-mahal-visitor-limits.jpg?w=1200&sharp=10&vib=20"

},
]
    )
    
  return (
    <div>
      <store.Provider value={[data,setData]}>
      {props.children}
      </store.Provider>
     
  </div>
  )
}

export default Blog;