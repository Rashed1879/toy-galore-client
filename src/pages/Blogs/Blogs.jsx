const Blogs = () => {
	const questionsAndAnswers = [
		{
			question:
				'What is an access token and refresh token? How do they work and where should we store them on the client-side?',
			answer: 'An access token is a credential used to access protected resources in an application. It is typically a JSON web token (JWT) that contains information about the user and their permissions.The authentication server generates an access token upon successful login. The client includes this token in subsequent requests to the server for authorization. A refresh token is used to obtain a new access token without requiring the user to log in again. It has a longer lifespan and is securely stored on the client-side. When an access token expires, the client uses the refresh token to request a new access token from the authentication server. Access and refresh tokens should be securely stored on the client-side, such as in HTTP-only cookies or secure storage mechanisms resistant to XSS attacks. We can store them in local storage also but it is less secure place to store them.',
		},
		{
			question: 'Compare SQL and NoSQL databases?',
			answer: 'SQL databases are based on a structured data model and use structured query language (SQL) for data manipulation. They provide strong data consistency and are suitable for complex relationships and transactions. NoSQL databases are non-relational and provide flexible schemas. They are horizontally scalable and offer high performance for large-scale data processing.',
		},
		{
			question: 'What is express js? What is Nest JS?',
			answer: 'Express.js is a popular web application framework for Node.js. It provides a set of robust features and utilities for building web applications and APIs. Express.js simplifies server-side development by providing a minimalist and flexible framework that supports routing, middleware, and various HTTP utility methods. Nest.js is a progressive and efficient Node.js framework for building scalable and maintainable server-side applications. It combines elements of object-oriented programming (OOP), functional programming (FP), and reactive programming. Nest.js provides a modular and extensible architecture, dependency injection, and powerful features for building enterprise-grade applications.',
		},

		{
			question: 'What is MongoDB aggregate and how does it work?',
			answer: 'MongoDB aggregate is a framework for performing advanced data processing and analysis operations on MongoDB documents. It allow us to perform calculations, transformations, and aggregations on the data stored in MongoDB. Aggregation pipelines are used to define a series of stages that process and transform the data, including operations like filtering, grouping, sorting, and projecting.',
		},
	];

	return (
		<div className="py-12 bg-[#FFE3E3]">
			<h1 className="text-4xl text-[#262A53] text-center font-bold mb-3">
				Questions and Answers
			</h1>
			<hr className="w-3/4 md:w-1/2 mx-auto border-2 border-[#262A53] mb-8" />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8">
				{questionsAndAnswers.map((qa, index) => (
					<div
						key={index}
						className="mb-8 border-2 border-[#628395] p-5 rounded-lg"
					>
						<h2 className="text-2xl text-[#262A53] font-bold mb-2 ">
							{qa.question}
						</h2>
						<p>{qa.answer}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Blogs;
