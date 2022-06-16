import React from "react";
import styles from "./styles";

function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.copyContainer}>
            <div className={styles.title}>
              Discover, collect, and sell extraordinary NFTs
            </div>
            <div className={styles.description}>
              OpenSea is the world's first and largest NFT marketplace
            </div>
            <div className={styles.ctaContainer}>
              <button className={styles.accentedButton}>Explore</button>
              <button className={styles.button}>Create</button>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <img
              className="rounded-t-lg"
              src="https://lh3.googleusercontent.com/vrdBQXjX4xDyWrbJ3ZnIwo8o7xZ9QAjXd_7V3PucpdMI059ecr8MFluIyH9kgXsb2b_FXG420yIghcKvCXBh9UA4UAbRV8kYF8VK1Q=s0"
              width={500}
            />
            <div className={styles.infoContainer}>
              {" "}
              <img
                className="h-[2.25rem] rounded-full"
                src="https://lh3.googleusercontent.com/qQj55gGIWmT1EnMmGQBNUpIaj0qTyg4YZSQ2ymJVvwr_mXXjuFiHJG9d3MRgj5DVgyLa69u8Tq9ijSm_stsph8YmIJlJQ1e7n6xj=s64"
                alt=""
              />
              <div className={styles.author}>
                <div className={styles.name}>Jolly</div>
                <a
                  className="text-[#1868b7]"
                  href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277"
                >
                  hola-kanola
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
