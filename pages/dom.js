import styles from '../styles/Dom.module.css'

const dom = ({ developer }) => {
  return (
    <div className='page-container'>
    <div className={styles.main}>
        <h1>Developer of the month</h1>
        <div className={styles.developerOfTheMonth}>
        <h3>{developer.name}</h3>
        <h6>{developer.position}</h6>
        <img src={developer.image} alt='Developer' />
        <p>{developer.description}</p>
        </div>
    </div>
    </div>
  )
}

export const getServerSideProps = async() => {
  const res = await fetch('https://my-json-server.typicode.com/DevanshuDev-dev/task-manager-janfs2/devOfMonth');
  const developer = await res.json();

  return{
    props:{
        developer
    }
  }
}
export default dom