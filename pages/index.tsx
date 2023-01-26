
import Header from '@/layouts/header/Header'

export default function Home() {
  return (
    <>
    <Header/>
      
    <div className="container">
      <div className="content">
        <img src="/images/profile.jpg" alt="Billy Somers" />
        <h1>Billy Somers</h1>
        <h2>Web Developer</h2>
        <p>Hi, I'm Billy. I'm a web developer based in the Papua New Guinea. I'm currently working at <a href="https://www.nso.gov.pg/">National Statistical Office</a> as a Multimedia Officer.</p>
        <p>I'm passionate about building accessible, performant and beautiful websites.</p>
        <p>When I'm not coding, I'm probably playing video games, watching films or reading.</p>
        <p>Feel free to get in touch with me on <a href="https://twitter.com/billywsomers">Twitter</a> or <a href="https://www.linkedin.com/in/billysomers/">LinkedIn</a>.</p>
      </div>
    </div>
    </>
    
  )
}

