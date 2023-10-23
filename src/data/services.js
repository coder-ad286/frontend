
import card1 from '../assets/images/Heroine_Images/card1-bg.jpg'
import card2 from '../assets/images/Heroine_Images/card2-bg.jpg'
import card3 from '../assets/images/Heroine_Images/card3-bg.jpg'
import card4 from '../assets/images/Heroine_Images/card5-bg.jpg'
import card5 from '../assets/images/Heroine_Images/card4-bg.jpg'
import Facial from '../assets/images/services/Facial.jpeg'
import Facial1 from '../assets/images/services/Facial1.jpg'
import Bleech from '../assets/images/services/Bleech.jpg'
import Bleech1 from '../assets/images/services/Bleech1.jpg'
import Hair from '../assets/images/services/Hair.jpeg'
import Hair1 from '../assets/images/services/Hair1.jpeg'
import Manicure from '../assets/images/services/Manicure.jpg'
import Pedicure from '../assets/images/services/Pedicure.jpg'
import Tattoo from '../assets/images/services/Tattoo.jpg'
import Tattoo1 from '../assets/images/services/Tattoo1.jpg'


export const getData = () => {
  return [
    {
      id: "8ba8a",
      title: "Facial",
      description: "At JeeTrends, we offer a range of facial services that cater to your specific skin needs and preferences. Our experienced and trained beauticians will analyze your skin condition and recommend the best facial service for you.",
      caption:"At JeeTrends, we offer a range of facial services that cater to your specific skin needs and preferences.",
      image: card1,
      branches: [
        "Clean Up",
        "De-Tan",
        "Fruit Facial",
        "Golden Facial",
        "Platinum Facial",
        "Skin Whitening Facial",
        "03 +Facial",
        "Rejuventing Facial",
        "Aqua Facial",
        "Advance Golden Facial"
      ],
      branchImages: [
        Facial,
        Facial1
      ]
    },
    {
      id: "6f892",
      title: "Bleach",
      description: "Experience the radiance of refreshed skin with our professional bleach services. At JeeTrends , we understand the importance of clear, glowing skin. Our bleach treatments are designed to rejuvenate your complexion.",
      caption:"Experience the radiance of refreshed skin with our professional bleach services.",
      image: card2,
      branches: [
        "Powder Bleach",
        "Cream Bleach",
        "Aroma Bleach",
        "Lacto Bleach"
      ],
      branchImages: [
        Bleech,
        Bleech1
      ]
    },
    {
      id: "dfe96",
      title: "Hair",
      description: "Discover the secret to luscious locks and stunning hairstyles at JeeTrends . Our expert hair stylists are passionate about creating the perfect look for you. Whether you're looking for a trim, a complete makeover, or specialized treatments.",
      caption:"Discover the secret to luscious locks and stunning hairstyles at JeeTrends.",
      image: card3,
      branches: [
        "Hair Cut",
        "HairWash Advance Cut",
        "Hair Spa",
        "Hair Coloring",
        "Hair Straightening",
        "Hair Smoothning"
      ],
      branchImages: [
        Hair,
        Hair1
      ]
    },
    {
      id: "7e6db",
      title: "Cure",
      description: "Believe that well-groomed hands and feet are the ultimate expression of self-care and sophistication. Treat yourself to the pinnacle of pampering with our exceptional pedicure and manicure services.",
      caption:"Believe that well-groomed hands and feet are the ultimate expression of self-care and sophistication.",
      image: card4,
      branches: [
        "Pedicure",
        "Manicure",
        "Gel Nails",
        "Acrylic Nails",
        "Nail Art"
      ],
      branchImages: [
        Manicure,
        Pedicure
      ]
    },
    {
      id: "d10ad",
      title: "Tattoos",
      description: "self-expression knows no boundaries. That's why we offer a range of professional tattoo services to help you bring your unique vision to life. Our skilled tattoo artists are passionate about creating meaningful and artistic tattoos.",
      caption:"Our skilled tattoo artists are passionate about creating meaningful and artistic tattoos.",
      image: card5,
      branches: [
        "Henna Tattoos",
        "Custom Tattoos",
        "Cover-Up Images",
        "Tattoo Touch-Ups"
      ],
      branchImages: [
        Tattoo,
        Tattoo1
      ]
    }
  ]
}