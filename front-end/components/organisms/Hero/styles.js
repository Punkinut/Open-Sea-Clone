const styles = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/vrdBQXjX4xDyWrbJ3ZnIwo8o7xZ9QAjXd_7V3PucpdMI059ecr8MFluIyH9kgXsb2b_FXG420yIghcKvCXBh9UA4UAbRV8kYF8VK1Q=s0')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `md:px-16 flex gap-x-14 h-screen relative justify-center flex-wrap items-center `,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[35px] lg:text-[46px] font-semibold text-center lg:text-left`,
  description: `text-[#8a939b] container-[400px] text-[18px] lg:text-[24px]  mt-[0.8rem] mb-[2.5rem] text-center lg:text-left`,
  ctaContainer: `flex justify-center lg:justify-start`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
  image: ` rounded-t-lg w-[350px] md:w-[400px] lg:w-[450px]`,
};

export default styles;
