import React from "react";
import styles from "./page.module.css";
import { SinglePost } from "@/components/SinglePost/SinglePost";
import popularImage from "@/assets/popular.png";

const page = async () => {
	const post = {
		id: 1,
		imgURL: popularImage.src,
		imageAlt: "windmills",
		category: "Environment",
		publicationDate: "October 10, 2023",
		likes: 1,
		shares: 1,
		title: "Global Climate Summit Addresses Urgent Climate Action",
		content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam enim hic, ipsa minima alias vero placeat consequuntur, impedit sed praesentium similique perspiciatis voluptatem quod tempore atque, et ea unde reprehenderit eaque nesciunt eum. Voluptate fugit ducimus dignissimos perferendis numquam, labore maiores totam sint, aperiam quis est, ad laudantium quaerat optio voluptatibus aut debitis ipsum ratione eum quisquam tempora! Est asperiores consequuntur sint nulla. Numquam vero culpa esse harum? Nostrum soluta laudantium quasi a fugiat, laborum iusto odit voluptates eius. Doloremque nihil reiciendis tempora incidunt nisi dolores inventore minus accusantium molestias explicabo amet at asperiores illo, assumenda soluta eius laborum vitae! Tempora voluptatem quod sapiente numquam libero deleniti cumque itaque dolores eaque fugit inventore laboriosam architecto voluptas minima, possimus nam error dolor quae veniam molestias cum vitae sequi! Voluptate molestias doloremque dolor voluptas quaerat reiciendis eius ipsa! Facere hic expedita iusto quisquam eos ipsum delectus necessitatibus suscipit officiis praesentium nam dolores error, perspiciatis velit nisi inventore obcaecati aliquam harum. Perferendis odit, qui sunt commodi, nesciunt animi ducimus quae voluptate vel ullam atque dolorem inventore rem possimus a odio facilis quaerat maxime iste praesentium in? Enim possimus nam iste quibusdam in. Laudantium officiis delectus excepturi? Iure, enim ut similique ratione voluptatem sunt esse rerum earum laborum aliquam cumque placeat error maxime blanditiis eaque minima, qui facere culpa quibusdam! Expedita esse, voluptatibus eveniet quisquam ratione eum. Ipsam error, alias unde odit libero iusto similique possimus nihil, quaerat ea accusantium nesciunt vitae officia incidunt. Architecto ut sit facere quam laboriosam aspernatur quae cupiditate error ullam rerum, harum minima quisquam eum eius vitae soluta amet fugit dolor deleniti iure unde omnis delectus commodi exercitationem! Repudiandae assumenda illo quam maiores ullam laudantium at beatae maxime nobis molestiae cupiditate quia tempora sunt vitae officia, commodi necessitatibus eum quibusdam! Hic ipsam nisi reiciendis commodi in est explicabo, maiores vero nam velit aspernatur dolores suscipit ullam iusto, eveniet, voluptatum dignissimos tempora illo laborum dolor cum dolorum itaque sapiente similique. Totam, beatae itaque. Maxime, vero. Exercitationem reiciendis, sint sunt ipsa molestiae iusto soluta cupiditate provident, error praesentium odio architecto perferendis quasi cumque sequi officiis, sed recusandae sit enim obcaecati quibusdam aperiam minima. Delectus facere fuga tempore laudantium tempora obcaecati pariatur animi eius natus adipisci veniam deleniti nam voluptatum quibusdam distinctio, debitis illum dolor illo, eligendi odio? Et, assumenda ipsam. Neque ipsa veniam nesciunt fugit minima inventore minus quasi nihil doloribus, vero cumque, ab earum quos. Laborum, voluptatem earum. Accusantium, voluptate. A, iusto est perspiciatis doloribus tempora soluta molestias quidem dolor recusandae? Maxime eveniet, ut tempore, odit deleniti alias consectetur esse reiciendis, dolores omnis quae beatae et? Fuga quis nisi in architecto soluta corrupti possimus accusantium suscipit porro? A illo sapiente possimus quod rem architecto enim id deleniti quam aperiam, dicta maxime ex cupiditate exercitationem sequi ipsum vero ea alias reiciendis. Voluptates impedit fugit voluptatibus repudiandae quo. Ut incidunt impedit amet, nihil dolor laborum earum porro provident, odio iusto ducimus dicta delectus officia quae culpa. Eaque sed amet voluptates, ipsam minus neque facere numquam eveniet veritatis. Repellendus eum culpa natus maiores.`,

		author: {
			name: "John Doe",
			image: "https://via.placeholder.com/150",
		},
	};

	return <div className={styles.container}>{post && <SinglePost post={post} />}</div>;
};

export default page;
