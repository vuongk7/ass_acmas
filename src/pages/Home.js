/** @format */

import { getAll } from '../api/project';
import { useEffect, useState } from '../lib';
const HomePage = () => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    getAll().then(({ data }) => setProject(data));
  }, []);
  return /*html*/ `
    <body>
    <!-- overlay -->
    <section id="overlay"></section>
    <!-- header -->
    <header>
      <div class="container">
        <nav class="navbar">
          <!-- logo -->
          <div class="navbar__logo">
            <img src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr" alt="website logo" />
          </div>
          <!-- links -->
          <ul class="navbar__links">
            <li class="navbar__link"><a href="#works"><button class="navbar__btn">work</button></a></li>
            <li class="navbar__link"><a href="#things"><button class="navbar__btn">About</button></a></li>
            <a href="#footer"><button class="navbar__btn">Contact</button></a>
            <a href=""><link rel="stylesheet" href="../src/pages/dangky/dangky.html"><button class="navbar__btn">register
            </button></a>
            <a href="../src/pages/dangky/dangnhap.html"><button class="navbar__btn">login</button></a>
          </ul>
          <!-- menu button -->
          <div class="navbar__icons">
            <div class="navbar__icon"></div>
          </div>
        </nav>
      </div>
    </header>
    <!-- banner -->
    <section id="banner">
      <div class="container">
        <!-- img -->
        <div class="banner__img">
        <img src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/348241955_940946690486222_2482666079929102129_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xIRGx_ztOm8AX83GLOL&_nc_ht=scontent.fhan19-1.fna&oh=00_AfDsGEY03WcjnJ8W3daIwFe0TcfZcmDFrm69hZO2zRUzJQ&oe=648D143C" alt="website logo" />

        </div>
        <!-- heading -->
        <div class="banner__heading">
          <h1>Hello, lê Qúy Vương</h1>
          <p>
          Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. 
          Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành
          </p>
          <a href="#"><button class="banner__btn">Xem Thêm</button></a>
          <div class="banner__socials">
            <a href="#"><i class="fab fa-dribbble"></i></a>
            <a href="#"><i class="fab fa-behance"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </section>
    <!-- things -->
    <section id="things">
      <div class="container">
        <!-- dec -->
        <div class="things__dec">
        
        </div>
        <!-- dec -->
        <div class="things__dec">
          
        </div>
        <!-- heading -->
        <h2>Things I Do</h2>
        <!-- item 1 -->
        <div class="things__item">
          <!-- img -->
          <img src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/344240218_269849668709877_7739397233969614877_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=fKY_1MWH2IUAX-6QELX&_nc_ht=scontent.fhan19-1.fna&oh=00_AfDR4jyodPuJdRhax4bLFjFikf_AOj4-wTe4tFp1rpzh0Q&oe=648CC301" />
          <!-- text -->
          <div class="things__item--heading">
            <h3>Lorem Ispum</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              consequatur provident, culpa quaerat fugit dolorem illum
              repellendus quas quasi obcaecati quia aliquid odit! Vitae, non?
              My mother is a person I admire most. She devoted a lot of time 
              and energy to the upbringing of my two brothers and 1
              Despite working hard, she always made time to teach us many useful things which are necessary and important in our later lives. Moreover, she is a good role model for me to follow. She always tries to get on well with people who live next door and help everyone when they are in difficulties, so most of them respect and love her. I admire and look up to my mother because she not only brings me up well but also stands by me and gives some help if necessary. For example, when I encounter some difficulties, she will give me some precious advice to help me solve those problems. 
              She has a major influence on me and 1 hope that I will inherit some of her traits.
            </p>
          </div>
        </div>
        <!-- item 2 -->
        <div class="things__item">
          <!-- img -->
          <img src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/345912128_1005182097118617_4198418381522929471_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=5u7vLThN8VsAX9qnTq7&_nc_ht=scontent.fhan19-1.fna&oh=00_AfC4sEfY3PPYtL6CehbJeApNgdJV_yX5yx2aqzJnmvvebA&oe=648BCD94" alt="illustration of women" />
          <!-- text -->
          <div class="things__item--heading">
            <h3>Lorem Ispum</h3>
            <p>
            My first visit to Nha Trang, the coastal city, was three years ago. It was a pleasant and memorable trip. Nha Trang, the capital of Khanhs Hoaf province, has one of the most popular municipal beaches in all of Vietnam. In Nha Trang, nature beauties are so tempting. Waves crashing onto the cliffs; the soft sigh of the sea breeze; clean white sands and turquoise waters; it all makes for a stunning landscapes. On my visit to Nha Trang, I used to get up early each morning to stroll along the beach a chance to breath in the fresh sea air and enjoy the sunrise across the water. One attraction that captivated me three years ago and still it does is the collection of small offshore islands. Hon Tre is the largest of the islands, and Monkey island is, as the name suggests, the home of hundreds of wild monkeys. Yen island is known for its swifts’ nests. Nha Trang is the city in hamoney: its fine weather, favorite position and friendly people bring it a cerain balance. Nha Trang is a great holiday destination. I hope to have chance to come back.
            </p>
          </div>
        </div>
        <!-- item 3 -->
        <div class="things__item">
          <!-- img -->
          <img src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/340900917_184016951123991_1609676390519614942_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=bgg-WbTkANkAX_sUiiN&_nc_ht=scontent.fhan19-1.fna&oh=00_AfBymW8pRkEemjYul6dwdhssKM2pcY_QG6S1zwnRhNPCog&oe=648C4DA6" alt="illustration of computer" />
          <!-- text -->
          <div class="things__item--heading">
            <h3>Lorem Ispum</h3>
            <p>
            Write about your favorite subject at school
            My favorite subject is English. The first reason I like this subject is that it is a core subject which is vital and essential in my career path. I try to learn this international language well so that I can communicate with foreigners and find a good job in the future. Fur- thermore, learning English well can help me read books or magazines in English. Through reading things in English, I can be exposed to various cultures and customs. Besides, my English teacher is a dedicated person who can engage me in her lessons and bring the passion for me. I found her lessons interesting be- cause she delivered them in a way that I really liked. In short, English is an important subject which I am really keen on.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- works -->
    <section id="works">
      <div class="container">
        <!-- dec -->
        <div class="works__dec">
          
        </div>
        <div class="works__dec">
         
        </div>
        <!-- heading -->
        <h2>Recent Works</h2>
        <!-- img -->
       
        <div class="works__img">
        ${projects
          .map((project, index) => {
            return /*html*/ `
                    <div class="works__img--single">
                    
                    <a  href="/project/${project.id}"><img src="${project.image}" alt="bag" />${project.title}</a>
                    
                  </div>
                  `;
          })
          .join('')}
          
          <!-- btn -->
        <div class="works__btn">
        
          <a href="admin/project"><button>View Works</button></a>
        </div>
      </div>
    </section>
    <!-- footer -->
    <footer id="footer">
      <div class="container">
        <!-- dec -->
        <div class="footer__dec">
          
        </div>
        <!-- img -->
        <div class="footer__img">
          <img src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/336246708_6078631395527941_7922843010995262429_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=LM5AnKxvFuwAX--6EFi&_nc_ht=scontent.fhan19-1.fna&oh=00_AfDU3E2DnpaAUmwvecATDIHK4MoVGI9_rRY4D92wIrEojg&oe=648C8B30" alt="illustration of women" />
        </div>
        <!-- heading -->
        <div class="footer__heading">
          <h1>Sẵn sàng để làm một cái gì đó tuyệt vời?</h1>
          <!-- contact -->
          <div class="footer__contact">
            <a href="tel:901234567">
              <i class="fas fa-phone-alt"></i>
              <ion-icon name="call-outline"></ion-icon>
              <p>035 811 1883</p>
            </a>
            <a href="quangpnph20850@fpt.edu.vn">
              <i class="fas fa-envelope"></i>
              <ion-icon name="navigate-outline"></ion-icon>
              <p>lê quý vương </p>
            </a>
          </div>
          <div class="banner__socials">
            <a href="#"><i class="fab fa-dribbble"></i></a>
            <a href="#"><i class="fab fa-behance"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </footer>
    //     
    `;
};

export default HomePage;
