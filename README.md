<div id="top"></div>


[![Forks][forks-shield]][forks-url]
[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]


<!-- PROJECT LOGO -->
<br />

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#Ticket Management">Ticket Management</a></li>
      </ul>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
Growing up, there was this game that I loved playing on my mum’s phone. However, I recently checked the app store and couldn’t find any version that met my expectations. So I built a web app version of the game. I didn’t want to keep the fun to myself though so check it out.

[![Product Name Screen Shot][product-screenshot]]


<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* [React.js](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com/)
* [Express](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)


<p align="right">(<a href="#top">back to top</a>)</p>

### Ticket Management

* [Trello](https://trello.com/b/4sj0buop/wordgame)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- INSTALLATION -->

## Installation

1. Clone the repo
<!-- update link here -->
   ```sh
   git clone https://github.com/HR-SDC-Sapphire/FEC-Project.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a config.js file in database/psql with your local psql connection details like this database/psql/config.js:
  ```js
   module.exports = {
      host: "localhost",
      user: "your name",
      database: "word_game",
      password: "",
      port: 5432,
      max: 30,
      idleTimeoutMillis: 1,
    };
   ```
4. Uncomment the last line in database/psql/db.js.
5. Populate the database by navigating to the root folder in your application in your terminal and run:
    ```sh
   node database/psql/db.js
    ```
6. Create a config.env file in server like so server/config.env and put your port information like so:
  ```env
   PORT=5000
   ```
7. Run in your terminal:
  ```sh
   npm run build-dev
    ```
8. Now start your server by running in your terminal:
  ```sh
   npm start
    ```
9. Open localhost http://localhost:5000/ in your browser

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

<!-- update link here -->
See the [open issues](https://github.com/Team-Spaghetti/FEC-Project/issues) for a full list issues.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- CONTACT -->
## Contact

### Creator

Prince Addai [@PhiAgent](https://github.com/PhiAgent)|[LinkedIn](https://www.linkedin.com/in/prince-gyekye-addai/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Img Shields](https://shields.io)
* [Font Awesome](https://fontawesome.com)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- update links here -->
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Team-Spaghetti/FEC-Project
[contributors-url]: https://github.com/Team-Spaghetti/FEC-Project/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Team-Spaghetti/FEC-Project?style=social
[forks-url]: https://github.com/Team-Spaghetti/FEC-Project/network/members
[stars-shield]: https://img.shields.io/github/stars/Team-Spaghetti/FEC-Project?style=social
[stars-url]: https://github.com/Team-Spaghetti/FEC-Project/stargazers
[issues-shield]: https://img.shields.io/github/issues/Team-Spaghetti/FEC-Project
[issues-url]: https://github.com/Team-Spaghetti/FEC-Project/issues
[product-screenshot]: dist/9a43e89cd9c4625358c3cf07455d3da2.gif
