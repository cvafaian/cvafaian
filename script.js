
var resultView = new Vue({

  el: '#app',
  data: {

    showWelcome: true,
    showMainPage: false,
    aboutMeActive: false,
    experienceActive: false,
    abilitiesActive: false,
    projectsActive: false,
    collapseOn: false,
    toggleOn: false,

  },

  methods: {

    clickedWelcomePageButton: function (divID) {

      this.showWelcome = false;
      this.showMainPage = true;

      if(divID == "#experienceDiv"){
        this.experienceActive = true;
      }

      else if (divID == "#abilitiesDiv") {
        this.abilitiesActive = true;
      }

      else if (divID == "#projectsDiv") {
        this.projectsActive = true;
      }

      else {
        this.aboutMeActive = true;
      }


      //axios.get(`https://api.github.com/users/cvafaian/repos`)
      //  .then(response => {
      //    console.log(response.data);
      //  }
      //)
    },

    clickedMainButton: function (divID) {

      this.experienceActive = false;
      this.abilitiesActive = false;
      this.projectsActive = false;
      this.aboutMeActive = false;


      if(divID == "#experienceDiv"){
        this.experienceActive = true;
      }

      else if (divID == "#abilitiesDiv") {
        this.abilitiesActive = true;
      }

      else if (divID == "#projectsDiv") {
        this.projectsActive = true;
      }

      else {
        this.aboutMeActive = true;
      }

      this.toggleOn = !this.toggleOn;
      console.log(this.toggleOn)



    },

    clickedToggleButton: function () {
      this.toggleOn = !this.toggleOn;
      this.collapseOn = !this.collapseOn;
    }
  }
})
