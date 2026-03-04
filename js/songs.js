/* ========================================
   MOOD MUSIC — Song Database
   Real songs mapped to moods + languages
   ======================================== */

const SONG_DATABASE = [

    // ────────────── SAD ──────────────
    { title: "Someone Like You", artist: "Adele", language: "English", mood: "sad", youtubeId: "hLQl3WQQoQ0" },
    { title: "Fix You", artist: "Coldplay", language: "English", mood: "sad", youtubeId: "k4V3Mo61fJM" },
    { title: "Hurt", artist: "Johnny Cash", language: "English", mood: "sad", youtubeId: "8AHCfZTRGiI" },
    { title: "The Night We Met", artist: "Lord Huron", language: "English", mood: "sad", youtubeId: "KtlgYxa6BMU" },
    { title: "Skinny Love", artist: "Bon Iver", language: "English", mood: "sad", youtubeId: "ssdgFoHLwnk" },
    { title: "Tum Hi Ho", artist: "Arijit Singh", language: "Hindi", mood: "sad", youtubeId: "Umqb9KENgmk" },
    { title: "Channa Mereya", artist: "Arijit Singh", language: "Hindi", mood: "sad", youtubeId: "EvAjMgMSsog" },
    { title: "Agar Tum Saath Ho", artist: "Arijit Singh & Alka Yagnik", language: "Hindi", mood: "sad", youtubeId: "sK7riqg2mr4" },
    { title: "Phir Le Aya Dil", artist: "Arijit Singh", language: "Hindi", mood: "sad", youtubeId: "MqoANESQ4cQ" },
    { title: "Kannazhaga", artist: "Dhanush & Shruti Haasan", language: "Tamil", mood: "sad", youtubeId: "TVU_cSkpIQU" },
    { title: "Venmathi Venmathiye", artist: "Srinivas & Sujatha", language: "Tamil", mood: "sad", youtubeId: "R3Opy0hMXMI" },
    { title: "Nee Neeli Kannullona", artist: "Vijay Deverakonda", language: "Telugu", mood: "sad", youtubeId: "ekuMbRzC4gM" },
    { title: "Emai Poyave", artist: "Sid Sriram", language: "Telugu", mood: "sad", youtubeId: "K0IBBJIlPRc" },
    { title: "Recuérdame", artist: "Carlos Rivera", language: "Spanish", mood: "sad", youtubeId: "MsGmklnYMJg" },
    { title: "Spring Day", artist: "BTS", language: "Korean", mood: "sad", youtubeId: "xEeFrLSkMm8" },
    { title: "Through the Night", artist: "IU", language: "Korean", mood: "sad", youtubeId: "BzYnNsJSByU" },
    { title: "Lemon", artist: "Kenshi Yonezu", language: "Japanese", mood: "sad", youtubeId: "SX_ViT4Ra7k" },
    { title: "Ki Banu Duniya Da", artist: "Gurdas Maan", language: "Punjabi", mood: "sad", youtubeId: "V6raXKoN2TY" },

    // ────────────── HAPPY ──────────────
    { title: "Happy", artist: "Pharrell Williams", language: "English", mood: "happy", youtubeId: "ZbZSe6N_BXs" },
    { title: "Walking on Sunshine", artist: "Katrina & The Waves", language: "English", mood: "happy", youtubeId: "iPUmE-tne5U" },
    { title: "Can't Stop the Feeling", artist: "Justin Timberlake", language: "English", mood: "happy", youtubeId: "ru0K8uYEZWw" },
    { title: "Good as Hell", artist: "Lizzo", language: "English", mood: "happy", youtubeId: "SmbmeOgWsqE" },
    { title: "Gallan Goodiyaan", artist: "Shankar Mahadevan", language: "Hindi", mood: "happy", youtubeId: "jCEdTq3j-0U" },
    { title: "Badtameez Dil", artist: "Benny Dayal", language: "Hindi", mood: "happy", youtubeId: "II2EO3Nw4Q0" },
    { title: "London Thumakda", artist: "Labh Janjua & Sonu Kakkar", language: "Hindi", mood: "happy", youtubeId: "udra3Mfw2oo" },
    { title: "Vaathi Coming", artist: "Anirudh Ravichander", language: "Tamil", mood: "happy", youtubeId: "wCTHlSU0zRk" },
    { title: "Why This Kolaveri Di", artist: "Dhanush", language: "Tamil", mood: "happy", youtubeId: "YR12Z8f1Dh8" },
    { title: "Butta Bomma", artist: "Armaan Malik", language: "Telugu", mood: "happy", youtubeId: "0pKz4UMaVJ4" },
    { title: "Ramuloo Ramulaa", artist: "Anurag Kulkarni & Mangli", language: "Telugu", mood: "happy", youtubeId: "NBux1ij7Nzk" },
    { title: "Vivir Mi Vida", artist: "Marc Anthony", language: "Spanish", mood: "happy", youtubeId: "YXnjy5YlDwk" },
    { title: "Dynamite", artist: "BTS", language: "Korean", mood: "happy", youtubeId: "gdZLi9oWNZg" },
    { title: "Tunak Tunak Tun", artist: "Daler Mehndi", language: "Punjabi", mood: "happy", youtubeId: "vTIIMJ9tUc8" },

    // ────────────── ENERGETIC ──────────────
    { title: "Lose Yourself", artist: "Eminem", language: "English", mood: "energetic", youtubeId: "_Yhyp-_hX2s" },
    { title: "Eye of the Tiger", artist: "Survivor", language: "English", mood: "energetic", youtubeId: "btPJPFnesV4" },
    { title: "Stronger", artist: "Kanye West", language: "English", mood: "energetic", youtubeId: "PsO6ZnUZI0g" },
    { title: "Thunder", artist: "Imagine Dragons", language: "English", mood: "energetic", youtubeId: "fKopy74weus" },
    { title: "Ziddi Dil", artist: "Vishal Dadlani", language: "Hindi", mood: "energetic", youtubeId: "X7beDHxbmjc" },
    { title: "Kar Har Maidaan Fateh", artist: "Sukhwinder Singh & Shreya Ghoshal", language: "Hindi", mood: "energetic", youtubeId: "GHRI6M02VN0" },
    { title: "Khalibali", artist: "Shivam Pathak", language: "Hindi", mood: "energetic", youtubeId: "v3ZhOqZUVVU" },
    { title: "Aalaporan Tamizhan", artist: "A.R. Rahman", language: "Tamil", mood: "energetic", youtubeId: "a5dUvVxljSs" },
    { title: "Saahore Baahubali", artist: "Daler Mehndi", language: "Telugu", mood: "energetic", youtubeId: "3SdXSrDOSbQ" },
    { title: "Ddu-Du Ddu-Du", artist: "BLACKPINK", language: "Korean", mood: "energetic", youtubeId: "IHNzOHi8sJs" },
    { title: "Gasolina", artist: "Daddy Yankee", language: "Spanish", mood: "energetic", youtubeId: "CCF1_jI8Prk" },
    { title: "5 Taara", artist: "Diljit Dosanjh", language: "Punjabi", mood: "energetic", youtubeId: "MLFE6pymbRU" },

    // ────────────── ROMANTIC ──────────────
    { title: "Perfect", artist: "Ed Sheeran", language: "English", mood: "romantic", youtubeId: "2Vv-BfVoq4g" },
    { title: "All of Me", artist: "John Legend", language: "English", mood: "romantic", youtubeId: "450p7goxZqg" },
    { title: "Thinking Out Loud", artist: "Ed Sheeran", language: "English", mood: "romantic", youtubeId: "lp-EO5I60KA" },
    { title: "A Thousand Years", artist: "Christina Perri", language: "English", mood: "romantic", youtubeId: "rtOvBOTyX00" },
    { title: "Tere Bina", artist: "A.R. Rahman", language: "Hindi", mood: "romantic", youtubeId: "Qn2vPFTxrmo" },
    { title: "Raabta", artist: "Arijit Singh", language: "Hindi", mood: "romantic", youtubeId: "uOAu6wnCa5s" },
    { title: "Hawayein", artist: "Arijit Singh", language: "Hindi", mood: "romantic", youtubeId: "cYOB941gyXI" },
    { title: "Tum Se Hi", artist: "Mohit Chauhan", language: "Hindi", mood: "romantic", youtubeId: "mt9xg0mmt28" },
    { title: "Munbe Vaa", artist: "A.R. Rahman", language: "Tamil", mood: "romantic", youtubeId: "lbpNVSbdx0I" },
    { title: "Maruvaarthai", artist: "Sid Sriram", language: "Tamil", mood: "romantic", youtubeId: "UoJe7bCiKwQ" },
    { title: "Inkem Inkem Inkem Kaavaale", artist: "Sid Sriram", language: "Telugu", mood: "romantic", youtubeId: "eZfHPCwjJko" },
    { title: "Bésame Mucho", artist: "Andrea Bocelli", language: "Spanish", mood: "romantic", youtubeId: "CNN8Kw2hxTg" },
    { title: "Boy With Luv", artist: "BTS ft. Halsey", language: "Korean", mood: "romantic", youtubeId: "XsX3ATc3FbA" },
    { title: "Lover", artist: "Diljit Dosanjh", language: "Punjabi", mood: "romantic", youtubeId: "sDP4fAz7sYs" },

    // ────────────── HEARTBROKEN ──────────────
    { title: "Someone You Loved", artist: "Lewis Capaldi", language: "English", mood: "heartbroken", youtubeId: "zABLecsR5UE" },
    { title: "Nothing Compares 2 U", artist: "Sinéad O'Connor", language: "English", mood: "heartbroken", youtubeId: "0-EF60neguk" },
    { title: "Back to December", artist: "Taylor Swift", language: "English", mood: "heartbroken", youtubeId: "QUwxKWT6m7U" },
    { title: "Heartless", artist: "The Weeknd", language: "English", mood: "heartbroken", youtubeId: "1DpH-icPpl0" },
    { title: "Kabira", artist: "Arijit Singh & Harshdeep Kaur", language: "Hindi", mood: "heartbroken", youtubeId: "jHNNMj5bNQw" },
    { title: "Ae Dil Hai Mushkil", artist: "Arijit Singh", language: "Hindi", mood: "heartbroken", youtubeId: "6FURuLYrR_Q" },
    { title: "Enna Sona", artist: "Arijit Singh", language: "Hindi", mood: "heartbroken", youtubeId: "T0Rs3R9JwDo" },
    { title: "Imaikkaa Nodigal", artist: "Hiphop Tamizha", language: "Tamil", mood: "heartbroken", youtubeId: "JuRrJMPU3Bw" },
    { title: "Samajavaragamana", artist: "Sid Sriram", language: "Telugu", mood: "heartbroken", youtubeId: "6GclBpaBen4" },
    { title: "Fake Love", artist: "BTS", language: "Korean", mood: "heartbroken", youtubeId: "7C2z4GqqS5E" },
    { title: "Corazón Sin Cara", artist: "Prince Royce", language: "Spanish", mood: "heartbroken", youtubeId: "x7RH3Gv5sEw" },

    // ────────────── CALM / CHILL ──────────────
    { title: "Weightless", artist: "Marconi Union", language: "English", mood: "calm", youtubeId: "UfcAVejslrU" },
    { title: "Here Comes the Sun", artist: "The Beatles", language: "English", mood: "calm", youtubeId: "KQetemT1sWc" },
    { title: "Banana Pancakes", artist: "Jack Johnson", language: "English", mood: "calm", youtubeId: "OkyrIRyrRdY" },
    { title: "Better Together", artist: "Jack Johnson", language: "English", mood: "calm", youtubeId: "seZMOTGCDag" },
    { title: "Khairiyat", artist: "Arijit Singh", language: "Hindi", mood: "calm", youtubeId: "hoNb6HuNmU0" },
    { title: "Ilahi", artist: "Arijit Singh", language: "Hindi", mood: "calm", youtubeId: "bx6WnLiv8Mk" },
    { title: "Kun Faya Kun", artist: "A.R. Rahman & Javed Ali", language: "Hindi", mood: "calm", youtubeId: "T94PHkuydcw" },
    { title: "Vaan Varuvaan", artist: "A.R. Rahman", language: "Tamil", mood: "calm", youtubeId: "B8BVzrCjSwM" },
    { title: "Manasu Maree", artist: "Sid Sriram", language: "Telugu", mood: "calm", youtubeId: "M5FVOIGiaks" },
    { title: "Despacito (Acoustic)", artist: "Luis Fonsi", language: "Spanish", mood: "calm", youtubeId: "kJQP7kiw5Fk" },
    { title: "Blue & Grey", artist: "BTS", language: "Korean", mood: "calm", youtubeId: "amnspvOH-EE" },

    // ────────────── ANGRY ──────────────
    { title: "In the End", artist: "Linkin Park", language: "English", mood: "angry", youtubeId: "eVTXPUF4Oz4" },
    { title: "Numb", artist: "Linkin Park", language: "English", mood: "angry", youtubeId: "kXYiU_JCYtU" },
    { title: "Break Stuff", artist: "Limp Bizkit", language: "English", mood: "angry", youtubeId: "ZpUYjpKg9KY" },
    { title: "Killing in the Name", artist: "Rage Against the Machine", language: "English", mood: "angry", youtubeId: "bWXazVhlyxQ" },
    { title: "Apna Time Aayega", artist: "Ranveer Singh", language: "Hindi", mood: "angry", youtubeId: "jEooJiKC4DM" },
    { title: "Sultan", artist: "KK & Vishal Dadlani", language: "Hindi", mood: "angry", youtubeId: "prqZpQrrM-o" },
    { title: "Kill This Love", artist: "BLACKPINK", language: "Korean", mood: "angry", youtubeId: "2S24-y0Ij3Y" },
    { title: "Gangsta's Paradise", artist: "Coolio", language: "English", mood: "angry", youtubeId: "fPO76Jlnz6c" },

    // ────────────── PARTY ──────────────
    { title: "Uptown Funk", artist: "Bruno Mars", language: "English", mood: "party", youtubeId: "OPf0YbXqDm0" },
    { title: "Don't Start Now", artist: "Dua Lipa", language: "English", mood: "party", youtubeId: "oygrmJFKYZY" },
    { title: "Levitating", artist: "Dua Lipa", language: "English", mood: "party", youtubeId: "TUVcZfQe-Kw" },
    { title: "Blinding Lights", artist: "The Weeknd", language: "English", mood: "party", youtubeId: "4NRXx6U8ABQ" },
    { title: "Kala Chashma", artist: "Badshah & Neha Kakkar", language: "Hindi", mood: "party", youtubeId: "k4yXQPMsmKQ" },
    { title: "Kar Gayi Chull", artist: "Badshah & Neha Kakkar", language: "Hindi", mood: "party", youtubeId: "NTHz9ephYTw" },
    { title: "Nachde Ne Saare", artist: "Jasleen Royal", language: "Hindi", mood: "party", youtubeId: "cVEadj4fBYo" },
    { title: "Rowdy Baby", artist: "Dhanush & Dhee", language: "Tamil", mood: "party", youtubeId: "x0_VnOgpILM" },
    { title: "Arabesque", artist: "Anirudh", language: "Tamil", mood: "party", youtubeId: "JZXzn2c4Eeo" },
    { title: "Buttabomma", artist: "Armaan Malik", language: "Telugu", mood: "party", youtubeId: "0pKz4UMaVJ4" },
    { title: "Despacito", artist: "Luis Fonsi ft. Daddy Yankee", language: "Spanish", mood: "party", youtubeId: "kJQP7kiw5Fk" },
    { title: "Gangnam Style", artist: "PSY", language: "Korean", mood: "party", youtubeId: "9bZkp7q19f0" },
    { title: "How You Like That", artist: "BLACKPINK", language: "Korean", mood: "party", youtubeId: "ioNng23DkIM" },
    { title: "Lak 28 Kudi Da", artist: "Diljit Dosanjh", language: "Punjabi", mood: "party", youtubeId: "WDQJI2e4NoE" },

    // ────────────── NOSTALGIC ──────────────
    { title: "Bohemian Rhapsody", artist: "Queen", language: "English", mood: "nostalgic", youtubeId: "fJ9rUzIMcZQ" },
    { title: "Yesterday", artist: "The Beatles", language: "English", mood: "nostalgic", youtubeId: "NrgmdOz227I" },
    { title: "Hotel California", artist: "Eagles", language: "English", mood: "nostalgic", youtubeId: "BciS5krYL80" },
    { title: "Sweet Child O' Mine", artist: "Guns N' Roses", language: "English", mood: "nostalgic", youtubeId: "1w7OgIMMRc4" },
    { title: "Tujhe Dekha Toh", artist: "Kumar Sanu & Lata Mangeshkar", language: "Hindi", mood: "nostalgic", youtubeId: "n1WpP7iowLc" },
    { title: "Kal Ho Naa Ho", artist: "Sonu Nigam", language: "Hindi", mood: "nostalgic", youtubeId: "g0eO74UmRBs" },
    { title: "Lag Ja Gale", artist: "Lata Mangeshkar", language: "Hindi", mood: "nostalgic", youtubeId: "TFr6G5fLMHM" },
    { title: "Chaiyya Chaiyya", artist: "Sukhwinder Singh", language: "Hindi", mood: "nostalgic", youtubeId: "YOYN9qNXmAw" },
    { title: "Snehithane", artist: "Alaipayuthey", language: "Tamil", mood: "nostalgic", youtubeId: "p4fD9FJxd4M" },
    { title: "Memories", artist: "Maroon 5", language: "English", mood: "nostalgic", youtubeId: "SlPhMPnQ58k" },

    // ────────────── MOTIVATIONAL ──────────────
    { title: "Stronger (What Doesn't Kill You)", artist: "Kelly Clarkson", language: "English", mood: "motivational", youtubeId: "Xn676-fLq7I" },
    { title: "Fight Song", artist: "Rachel Platten", language: "English", mood: "motivational", youtubeId: "xo1VInw-SKc" },
    { title: "Hall of Fame", artist: "The Script ft. will.i.am", language: "English", mood: "motivational", youtubeId: "mk48xRzuNvA" },
    { title: "Believer", artist: "Imagine Dragons", language: "English", mood: "motivational", youtubeId: "7wtfhZwyrcc" },
    { title: "Unstoppable", artist: "Sia", language: "English", mood: "motivational", youtubeId: "cxjvTXo9WWM" },
    { title: "Chak De India", artist: "Sukhwinder Singh", language: "Hindi", mood: "motivational", youtubeId: "cBAMV6SMdwM" },
    { title: "Zinda", artist: "Siddharth Mahadevan", language: "Hindi", mood: "motivational", youtubeId: "iajwpBkrJqE" },
    { title: "Dangal", artist: "Daler Mehndi", language: "Hindi", mood: "motivational", youtubeId: "VX9qAZFtjqQ" },
    { title: "Verithanam", artist: "A.R. Rahman", language: "Tamil", mood: "motivational", youtubeId: "1xG1x5VXJWI" },
    { title: "Not Today", artist: "BTS", language: "Korean", mood: "motivational", youtubeId: "9DwzBICPhdM" },
    { title: "Haan Kargi", artist: "Ammy Virk", language: "Punjabi", mood: "motivational", youtubeId: "bB5sph-2J4k" },
];

// Export for use in mood.js
window.SONG_DATABASE = SONG_DATABASE;
