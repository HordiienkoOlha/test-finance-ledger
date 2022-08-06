import blogWebp from "../../images/home/blog.webp";
import blog2Webp from "../../images/home/blog@2x.webp";
import blog1 from "../../images/home/blog.jpg";
import blog2 from "../../images/home/blog@2x.jpg";

const Blog = () => {
  return (
    <section className="blog ">
      <picture>
        <source
          media="(min-width: 1200px)"
          srcSet={`
                    ${blogWebp} 1x,
                  ${blog2Webp} 2x`}
          type="image/webp"
        />
        <source
          media="(min-width: 1200px)"
          srcSet={`
                    ${blog1} 1x,
                    ${blog2} 2x`}
        />
        <img src={blog1} alt="Tablet, notebook and coffee" />
      </picture>
      <div className="blog__content section container">
        <p className="blog__pretitle">April 16 2020</p>
        <h3 className="blog__title">Blog Post One</h3>
        <p className="blog__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button type="button" className="button blog__button">
          Read Our Blog
        </button>
      </div>
    </section>
  );
};

export default Blog;
