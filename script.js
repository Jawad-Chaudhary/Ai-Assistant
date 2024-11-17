const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  function Speak(text) {
    const abc = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(abc);
  }

  function handleCommands(command) {
    // App and Web Navigation
    if (command.includes("open youtube")) {
      Speak("Opening YouTube...");
      window.open("https://www.youtube.com/", "_blank");
    } else if (command.includes("open facebook")) {
      Speak("Opening Facebook...");
      window.open("https://www.facebook.com/", "_blank");
    } else if (command.includes("open google")) {
      Speak("Opening Google...");
      window.open("https://www.google.com/", "_blank");
    } else if (command.includes("open twitter")) {
      Speak("Opening Twitter...");
      window.open("https://www.twitter.com/", "_blank");
    } else if (command.includes("open instagram")) {
      Speak("Opening Instagram...");
      window.open("https://www.instagram.com/", "_blank");
    } else if (command.includes("open snapchat")) {
      Speak("Opening Snapchat...");
      window.open("https://www.snapchat.com/", "_blank");
    } else if (command.includes("open whatsapp")) {
      Speak("Opening WhatsApp...");
      window.open("https://web.whatsapp.com/", "_blank");
    } else if (command.includes("open linkedin")) {
      Speak("Opening LinkedIn...");
      window.open("https://www.linkedin.com/", "_blank");
    } else if (command.includes("open pinterest")) {
      Speak("Opening Pinterest...");
      window.open("https://www.pinterest.com/", "_blank");
    } else if (command.includes("open tiktok")) {
      Speak("Opening TikTok...");
      window.open("https://www.tiktok.com/", "_blank");
    } else if (command.includes("open reddit")) {
      Speak("Opening Reddit...");
      window.open("https://www.reddit.com/", "_blank");
    } else if (command.includes("open github")) {
      Speak("Opening GitHub...");
      window.open("https://www.github.com/", "_blank");
    } else if (command.includes("open discord")) {
      Speak("Opening Discord...");
      window.open("https://www.discord.com/", "_blank");
    } else if (command.includes("open pornhub")) {
      Speak("Go and pray (Astagfirullah).");
    } 

    // General Queries
    else if (command.includes("how are you") || command.includes("hello")) {
      Speak("I am just an assistant of Jawad Chaudhary, but thank you for asking!");
    } else if (command.includes("who is your founder") || command.includes("creator") || command.includes("father")) {
      Speak("My creator is Jawad Chaudhary. He is studying in the G I A I C program by Kamran Tessori and exploring new things.");
    }

    // Weather and Time
    else if (command.includes("what is the time") || command.includes("current time")) {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      Speak(`The current time is ${hours}:${minutes} ${ampm}.`);
    } else if (command.includes("what is the weather")) {
      Speak("I cannot check the weather, but you can visit a weather website.");
    }

    // Google Search Feature
    else if (command.includes("search") || command.includes("google")) {
      const query = command.replace("search", "").replace("google", "").trim();
      if (query) {
        Speak(`Searching Google for ${query}...`);
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
      } else {
        Speak("Please say what you want to search for.");
      }
    }

    // Math and Conversions
    else if (command.includes("calculate")) {
      const expression = command.replace("calculate", "").trim();
      try {
        const result = eval(expression);
        Speak(`The result is ${result}`);
      } catch {
        Speak("Sorry, I couldn't calculate that.");
      }
    }

    // Reminders and Alarms
    else if (command.includes("set a reminder")) {
      Speak("I can't set reminders yet, but you can use your phone or a reminder app.");
    } else if (command.includes("set an alarm")) {
      Speak("I can't set alarms, but you can try using your phone for that.");
    }

    // Music and Media
    else if (command.includes("play music")) {
      Speak("I can't play music directly, but you can use Spotify or YouTube.");
    }

    // Default Response
    else {
      Speak("Sorry, I didn't understand the command.");
    }
  }

  Speak("Hello, my friend How can I help you?");
  
  setTimeout(() => {
    recognition.start();
  }, 2500);

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    handleCommands(command);
  };
});
