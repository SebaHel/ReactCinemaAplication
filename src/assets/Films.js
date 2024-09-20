import Avatar from "./Images/Avatar.jpg";
import Inception from "./Images/Inception.jpg";
import Avengers  from "./Images/Avengers.jpg";
import FightClub from "./Images/FightClub.jpg";
import ForrestGump from "./Images/ForrestGump.jpg";
import Gladiator from "./Images/Gladiator.jpg";
import Interstellar from "./Images/Interstellar.jpg";
import JurassicPark from "./Images/JurassicPark.jpg";
import Lotr1 from "./Images/LOTR1.jpg";
import PulpFiction from "./Images/PulpFiction.jpg";
import SchindlerList from "./Images/SchindlerList.jpg";
import StarWars6 from "./Images/StarWars6.jpg";
import TheDarkNight from "./Images/TheDarkKnight.jpg";
import TheGodFather from "./Images/TheGodFather.jpg";
import TheLionKing from "./Images/TheLionKing.jpg";
import TheMatrix from "./Images/TheMatrix.jpg";
import TheShawshank from "./Images/TheShwashankRedemption.jpg";
import TheSilence from "./Images/TheSilenceOfTheLambs.jpg";
import Titanic from "./Images/Titanic.jpg";


const FilmList = [
    {
        Id: 1,
        Name: "Inception",
        Description: "A skilled thief, the absolute best in the dangerous art of extraction, steals valuable secrets from deep within the subconscious during the dream state.",
        Rating: 8.8,
        img: Inception,
        Category: "Sci-Fi",
        Hours: ["10:00", "14:30", "19:00", "22:00"],
        Duration: 148,
        Days: ["Mon", "Wed", "Fri", "Sun"],
        AudioOptions: ["Napisy", "Dubbing"],
        MinAge: 13,
        EndTimes: ["12:28", "17:58", "21:28", "00:28"]
    },
    {
        Id: 2,
        Name: "The Godfather",
        Description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        Rating: 9.2,
        img: TheGodFather,
        Category: "Crime, Drama",
        Hours: ["12:00", "16:00"],
        Duration: 175,
        Days: ["Tue", "Thu", "Sat"],
        AudioOptions: ["Napisy", "Lektor"],
        MinAge: 16,
        EndTimes: ["14:55", "18:55"]
    },
    {
        Id: 3,
        Name: "The Dark Knight",
        Description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        Rating: 9.0,
        img: TheDarkNight,
        Category: "Action, Crime, Drama",
        Hours: ["11:00", "15:30", "18:00", "21:00", "23:30"],
        Duration: 152,
        Days: ["Mon", "Thu", "Fri", "Sat"],
        AudioOptions: ["Napisy", "Dubbing"],
        MinAge: 14,
        EndTimes: ["13:32", "18:02", "20:32", "23:32", "02:02"]

    },
    {
        Id: 4,
        Name: "Forrest Gump",
        Description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
        Rating: 8.8,
        img: ForrestGump,
        Category: "Drama, Romance",
        Hours: ["10:30", "14:00", "18:30"],
        Duration: 142,
        Days: ["Tue", "Wed", "Sun"],
        AudioOptions: ["Napisy"],
        MinAge: 12,
        EndTimes: ["12:52", "16:22", "21:02"]
    },
    {
        Id: 5,
        Name: "Pulp Fiction",
        Description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        Rating: 8.9,
        img: PulpFiction,
        Category: "Crime, Drama",
        Hours: ["12:30", "17:00", "21:30", "00:00"],
        Duration: 154,
        Days: ["Mon", "Fri", "Sat"],
        AudioOptions: ["Napisy", "Lektor"],
        MinAge: 16,
        EndTimes: ["15:04", "19:34", "00:04", "02:34"]
    },
    {
        Id: 6,
        Name: "Schindler's List",
        Description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        Rating: 9.0,
        img: SchindlerList,
        Category: "Biography, Drama, History",
        Hours: ["09:00", "12:00", "15:00", "18:00", "21:00"],
        Duration: 195,
        Days: ["Wed", "Sat", "Sun"],
        AudioOptions: ["Napisy"],
        MinAge: 16,
        EndTimes: ["12:15", "15:15", "18:15", "21:15", "00:15"]
    },
    {
        Id: 7,
        Name: "The Shawshank Redemption",
        Description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        Rating: 9.3,
        img: TheShawshank,
        Category: "Drama",
        Hours: ["13:00", "17:30", "20:30", "23:45"],
        Duration: 142,
        Days: ["Tue", "Thu", "Sat", "Sun"],
        AudioOptions: ["Napisy", "Lektor"],
        MinAge: 15,
        EndTimes: ["15:22", "20:02", "23:02", "02:07"]
    },
    {
        Id: 8,
        Name: "Fight Club",
        Description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        Rating: 8.8,
        img: FightClub,
        Category: "Drama",
        Hours: ["14:00", "18:30"],
        Duration: 139,
        Days: ["Mon", "Wed", "Fri"],
        AudioOptions: ["Napisy"],
        MinAge: 16,
        EndTimes: ["16:19", "20:49"]
    },
    {
        Id: 9,
        Name: "The Matrix",
        Description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        Rating: 8.7,
        img: TheMatrix,
        Category: "Action, Sci-Fi",
        Hours: ["11:30", "14:00", "16:30", "19:00", "21:30"],
        Duration: 136,
        Days: ["Mon", "Thu", "Sat"],
        AudioOptions: ["Napisy", "Dubbing"],
        MinAge: 13,
        EndTimes: ["13:46", "16:36", "19:06", "21:36", "00:06"]
    },
    {
        Id: 10,
        Name: "Star Wars: Episode IV - A New Hope",
        Description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle station.",
        Rating: 8.6,
        img: StarWars6,
        Category: "Action, Adventure, Fantasy",
        Hours: ["09:00", "13:00", "17:00", "21:00"],
        Duration: 121,
        Days: ["Tue", "Fri", "Sun"],
        AudioOptions: ["Napisy", "Dubbing"],
        MinAge: 12,
        EndTimes: ["11:01", "15:01", "19:01", "23:01"]
    },
    {
        Id: 11,
        Name: "The Lord of the Rings: The Fellowship of the Ring",
        Description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        Rating: 8.8,
        img: Lotr1,
        Category: "Adventure, Drama, Fantasy",
        Hours: ["10:00", "14:00", "18:00"],
        Duration: 178,
        Days: ["Mon", "Wed", "Sat"],
        AudioOptions: ["Napisy", "Dubbing"],
        MinAge: 14,
        EndTimes: ["12:58", "16:58", "20:58"]
    },
    {
        Id: 12,
        Name: "Interstellar",
        Description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        Rating: 8.6,
        img: Interstellar,
        Category: "Adventure, Drama, Sci-Fi",
        Hours: ["12:00", "16:00", "20:00"],
        Duration: 169,
        Days: ["Tue", "Thu", "Sun"],
        AudioOptions: ["Napisy", "Lektor"],
        MinAge: 12,
        EndTimes: ["14:49", "18:49", "22:49"]
    },
    {
        Id: 13,
        Name: "Gladiator",
        Description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        Rating: 8.5,
        img: Gladiator,
        Category: "Action, Adventure, Drama",
        Hours: ["11:00", "15:00", "19:00", "22:30"],
        Duration: 155,
        Days: ["Wed", "Fri", "Sat"],
        AudioOptions: ["Napisy", "Lektor"],
        MinAge: 14,
        EndTimes: ["13:35", "17:35", "21:35", "00:05"]
    },
    {
        Id: 14,
        Name: "The Silence of the Lambs",
        Description: "A young FBI cadet must confide in an incarcerated and manipulative cannibal killer to receive his help in catching another serial killer.",
        Rating: 8.6,
        img: TheSilence,
        Category: "Crime, Drama, Thriller",
        Hours: ["09:30", "14:30", "19:30", "22:30"],
        Duration: 118,
        Days: ["Mon", "Thu", "Sat"],
        AudioOptions: ["Napisy"],
        MinAge: 16,
        EndTimes: ["11:28", "16:28", "21:28", "00:28"]
    },
    {
        Id: 15,
        Name: "The Lion King",
        Description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        Rating: 8.5,
        img: TheLionKing,
        Category: "Animation, Adventure, Drama",
        Hours: ["10:00", "13:30", "17:00"],
        Duration: 88,
        Days: ["Wed", "Fri", "Sun"],
        AudioOptions: ["Napisy", "Dubbing"],
        MinAge: 8,
        EndTimes: ["11:28", "15:58", "19:30"]
    },
    {
        Id: 16,
        Name: "Jurassic Park",
        Description: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
        Rating: 8.1,
        img: JurassicPark,
        Category: "Adventure, Sci-Fi",
        Hours: ["11:00", "15:00", "19:00", "21:45"],
        Duration: 127,
        Days: ["Mon", "Tue", "Sat"],
        AudioOptions: ["Napisy", "Dubbing"],
        MinAge: 13,
        EndTimes: ["13:07", "17:07", "21:07", "23:52"]
    },
    {
        Id: 17,
        Name: "Avatar",
        Description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        Rating: 7.8,
        img: Avatar,
        Category: "Action, Adventure, Fantasy",
        Hours: ["12:30", "16:30", "21:00"],
        Duration: 162,
        Days: ["Tue", "Fri", "Sat"],
        AudioOptions: ["Napisy", "Dubbing"],
        MinAge: 12,
        EndTimes: ["15:12", "19:12", "23:42"]
    },
    {
        Id: 18,
        Name: "The Avengers",
        Description: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
        Rating: 8.0,
        img: Avengers,
        Category: "Action, Adventure, Sci-Fi",
        Hours: ["10:00", "14:00", "18:30", "22:30"],
        Duration: 143,
        Days: ["Wed", "Fri", "Sun"],
        AudioOptions: ["Napisy", "Dubbing"],
        MinAge: 12,
        EndTimes: ["12:23", "16:23", "21:13", "00:53"]
    },
    {
        Id: 19,
        Name: "Titanic",
        Description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        Rating: 7.9,
        img: Titanic,
        Category: "Drama, Romance",
        Hours: ["09:00", "13:00", "17:30", "21:30", "23:45"],
        Duration: 195,
        Days: ["Mon", "Thu", "Sat"],
        AudioOptions: ["Napisy", "Lektor"],
        MinAge: 13,
        EndTimes: ["12:15", "17:15", "21:45", "01:45", "02:00"]
    }
];
export default FilmList