// Keep the old code for now
const Home = () => (
  <>
    <div
      className="container"
      dangerouslySetInnerHTML={{
        __html: `
          <h1 class="title">Abraham Hernandez</h1>
          <p class="description">Fullstack Developer building software mostly with Javascript & React Native. Taking blurry pictures in my free time. <span>#stopstopping</span></p>
          <div class="social">
              <a href="https://github.com/abranhe">Github<i class="fab fa-github"></i></a>
              <a href="https://instagram.com/abranhe">Instagram<i class="fab fa-instagram"></i></a>
          </div>
        `
      }}
    ></div>
    <style>
        
    </style>
  </>
);

export default Home;
