import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.cover}
            src="https://github.com/douglasgvr.png"
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
          👉 {" "}<a href="#">jane.design/doctorcare </a>{" "}
        </p>
        <p>
          <a href="#">#novoprojeto</a>{" "}
          <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>{" "}
        </p>
      </div>
    </article>
  );
}
