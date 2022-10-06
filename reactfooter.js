importing
import {
  BsGithub,
  BsYoutube,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsStackOverflow,
} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaHackerrank } from "react-icons/fa";


html
<footer>
        <p>Developed by Shehzad</p>
		<ul className="iconscontainer">
            <li><a href="https://twitter.com/Shehza_d_" target="_blank" rel="noreferrer" > <BsTwitter/></a></li>
            <li><a href="https://github.com/shehza-d" target="_blank" rel="noreferrer"  > <BsGithub/></a></li>
            <li><a href="https://www.linkedin.com/in/shehzadd/" target="_blank" rel="noreferrer"> <BsLinkedin/> </a></li>
            <li><a href="https://instagram.com/shehza.d?utm_medium=copy_link" target="_blank" rel="noreferrer" > <BsInstagram/></a></li>
            <li><a href="https://www.youtube.com/channel/UCUTMs216kmgY9lOgBFDckAQ" target="_blank" rel="noreferrer" ><BsYoutube/></a></li>
            <li><a href="mailto:shehzaddiqbal@outlook.com" target="_blank"  rel="noreferrer" > <HiOutlineMail/></a></li>
            <li><a href="https://www.hackerrank.com/shehza_d" target="_blank"  rel="noreferrer" > <FaHackerrank/></a></li>
            <li><a href="https://stackoverflow.com/users/18210334/shehzad" target="_blank"  rel="noreferrer" > <BsStackOverflow/></a></li>
          
            {/* <li><a href="https://www.fiverr.com/shehza_d" target="_blank"  rel="noreferrer" > <i><FaHackerrank/></i></a></li>
            <li><a href="hackerrank.com" target="_blank"  rel="noreferrer" > <i><FaHackerrank/></i></a></li>
            <li><a href="hackerrank.com" target="_blank"  rel="noreferrer" > <i><FaHackerrank/></i></a></li> */}
        </ul>
    </footer>
CSS
/* Footer/links */
.iconscontainer {
    list-style: none;
    display: flex;
    fill: #ffffff;
    margin: 15px;
    /* width: 20px; */
}

.icon {
    padding-right: 13px;
    fill: white;
    width: 18px;
    cursor: pointer;
}

.icon:hover {
    fill: #fffc3a;
}

footer {

    /* position: sticky; */
    /* position: absolute; */
    /* display: hidden; */
    display: flex;
    justify-content: center;
    /* bottom: 0; */
    width: 100%;
    height: 25px;
    background: rgb(14, 154, 224);
    padding: 18px 0px;
    align-items: center;
}


footer>p {
    color: white;
    /* padding-top: 15px; */
    /* padding-bottom: 15px; */
    font-size: 20px;
} 
/* Footer/links end*/

