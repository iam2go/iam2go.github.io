import * as React from "react"
import { Link } from "gatsby"
import { Tag, TagBox } from "../Tag"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostBlock = ({ slug, post }) => {
  const image = getImage(post.thumbnail)

  return (
    <li className="bg-background-sub min-h-[12rem] rounded-xl p-5 md:p-8 my-8 flex flex-col md:flex-row">
      {image && (
        <GatsbyImage
          image={image}
          alt={post.title}
          className="w-100p md:w-56 md:min-w-56 rounded-lg mb-5 md:mb-0 md:mr-10"
        />
      )}
      <article
        className="post-list-item"
        itemScope
        itemType="http://schema.org/Article"
      >
        <h2>
          <Link to={slug} itemProp="url">
            <span itemProp="headline">{post.title}</span>
          </Link>
        </h2>
        <TagBox>
          {post.tags?.map(tag => (
            <Tag
              key={tag}
              className="text-text-default px-4 bg-background-primary rounded-2xl text-sm  font-light leading-6"
              text={tag}
            />
          ))}
        </TagBox>
        <div className="text-text-default text-sm  font-light my-1 md:my-5  line-clamp-2">
          <p
            dangerouslySetInnerHTML={{
              __html: post.description || post.excerpt,
            }}
            itemProp="description"
          />
        </div>
        <div className="text-accent-default text-xs">{post.date}</div>
      </article>
    </li>
  )
}

export default PostBlock
