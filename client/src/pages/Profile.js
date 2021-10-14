import React, {useState} from 'react';

import { Redirect, useParams } from 'react-router-dom';
import { useQuery, useReactiveVar } from '@apollo/client';

import SkillsList from '../components/SkillsList';
import SkillForm from '../components/SkillForm';

import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { profileId } = useParams();
  const [randomWord, updateRandomWord] = useState("")
  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { profileId: profileId },
    }
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const profile = data?.me || data?.profile || {};

  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.name) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

let NumberOfWords = 100

let words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "Anti-gravity chamber"
words[2] = "Sensory deprivation tanks"
words[3] = "Horseback riding"
words[4] = "Rich house shopping"
words[5] = "Dancing"
words[6] = "Poetry slam"
words[7] = "Karaoke"
words[8] = "Double date"
words[9] = "Paint but the canvas is your partner"
words[10] = "Cook but the plate is your partner"
words[11] = "Cook a nice meal dress up candles and nice music"
words[12] = "Picnic"
words[13] = "Hiking"
words[14] = "Go to a new park"
words[15] = "Arboretum"
words[16] = "People watching"
words[17] = "Zip lining"
words[18] = "Play in a playground"
words[19] = "Swimming"
words[20] = "Workout together"
words[21] = "Spa day"
words[22] = "Try Jiu-Jitsu"
words[23] = "Wine and painting"
words[24] = "Painting at a lake"
words[25] = "Fishing"
words[26] = "Kayaking"
words[27] = "Canoeing"
words[28] = "Make some popcorn, get some snacks, make a fort and watch a movie together"
words[29] = "Camping in the backyard"
words[30] = "Game night"
words[31] = "Camping in the woods"
words[32] = "Play 36 questions to make you fall in love"
words[33] = "Both partners leave their phones, driving around the city and get lost"
words[34] = "Take on a house project together"
words[35] = "Get some ice cream"
words[36] = "Go to a coffee shop that is not starbucks"
words[37] = "Dress to impress and go to a fancy restaurant"
words[38] = "Go to thrift store and pick out an outfit for each other"
words[39] = "Go to a museum"
words[40] = "Take a cooking class together"
words[41] = "Cook a complicated meal together"
words[42] = "Play video games together"
words[43] = "Go to a bar and pretend like you don’t know each other"
words[44] = "Go wine tasting"
words[45] = "Both of you create an alias with an accent and go about day without breaking character"
words[46] = "Climb a tree together"
words[47] = "Play hide and seek in the dark"
words[48] = "Try a new position from Kamasutra"
words[49] = "Walk around the mall"
words[50] = "Start a garden together"
words[51] = "Scavenger hunt"
words[52] = "Go window shopping"
words[53] = "Go to Costco or Sam's club and try all the free samples"
words[54] = "Have a tea party with cakes and sandwiches"
words[55] = "Go to a comedy show"
words[56] = "Go to an improv theatre"
words[57] = "Go to the library/book store and pick out books for each other"
words[58] = "Make a mix CD or a playlist for your partner"
words[59] = "Give each other a long sensual massage with candles and oil"
words[60] = "Go to an animal shelter and visit some cute animals"
words[61] = "Go to a farm during harvest season and pick some fruits"
words[62] = "Take a sculpting class together"
words[63] = "Buy some air dry clay and make a sculpture for each other"
words[64] = "Do couples yoga together"
words[65] = "Record a podcast together about something you both passionately agree about"
words[66] = "Record a podacast together about something you both passionately disagree about"
words[67] = "Record a song together"
words[68] = "Make goddie bags and pass out to the homeless"
words[69] = "Have a home spa day"
words[70] = "Get manicures and pedicures together"
words[71] = "Look at the clouds together"
words[72] = "Go to the drive in theatre"
words[73] = "Listen to an epic album together in the car with great sound system"
words[74] = "Play tennis"
words[75] = "Play vollyball"
words[76] = "Play basketball"
words[77] = "got to the library and join a free class they offer"
words[78] = "Cook a meal together handcuffed"
words[79] = "pretend to be tourist in your city and do all the touristy things"
words[80] = "Write love letters to each other and hide it around the house for each other to find"
words[81] = "Go to a local theatre and watch a play"
words[82] = "Take a dance class together"
words[83] = "Lay out under the starts"
words[84] = "Get a plan reading done with each other"
words[85] = "Create a talent show and perform you talents for each other"
words[86] = "Turn the music UP, turn the lights off and have a dance party"
words[87] = "Skydiving"
words[88] = "Go on a hot air balloon ride"
words[89] = "Take a helicopter ride around city"
words[90] = "Buy some adult coloring books and nice color pencils and color together"
words[91] = "Sleep in, make your partner breakfast in bed"
words[92] = "Play strip poker or a card game you know"
words[93] = "Play truth or dare"
words[94] = "Make a fort, turn off the lights, getflashlights and tell scary-stories"
words[95] = "Take a walk around your neighborhood or a park"
words[96] = "Go bowling"
words[97] = "Play pool"
words[98] = "Go kart racing"
words[99] = "Play mini-golf"
words[100] = "Go to an arcade"


function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

// function PickRandomWord() {
// // Generate a random number between 1 and NumberOfWords
// var rnd = Math.ceil(Math.random() * NumberOfWords)
// const word = words[rnd]
// if (user.dates.includes(word)) {
//   return PickRandomWord()
// }
// updateRandomWord(word)
// // Display the word inside the text box
// // frm.WordBox.value = words[rnd]
// }

function PickRandomWord() {
  // Generate a random number between 1 and NumberOfWords
  var rnd = Math.ceil(Math.random() * NumberOfWords)
  const word = words[rnd]
  updateRandomWord(word)
  // Display the word inside the text box
  // frm.WordBox.value = words[rnd]
  }

return (
  <div>
    <h2 className="card-header">
      {profileId ? `${profile.name}'s` : 'Your'} friends have reviewed these
      dates...
    </h2>

    {profile.skills?.length > 0 && (
      <SkillsList
        skills={profile.skills}
        isLoggedInUser={!profileId && true}
      />
    )}

    <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
      <SkillForm randomWord={randomWord} pickRandomWord={PickRandomWord} profileId={profile._id} />
    </div>
  </div>
);
};

export default Profile;
