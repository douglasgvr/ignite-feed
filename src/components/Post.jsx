import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={StyleSheet.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.cover}
            src="https://plus.unsplash.com/premium_photo-1678565999588-08fdd0b1410b?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className={styles.authorInfo}>
            <strong>Douglas Coelho</strong>
            <span>Developer Backend</span>
          </div>
        </div>
        <time title="26 de dezembro de 2024" dateTime="26/12/2024 20:58:01">
          Publicado há 1 hora
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>{" "}
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>{" "}
        <p>
          👉 <a href="#">jane.design/doctorcare </a>{" "}
        </p>
        <p>
          <a href="#">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
