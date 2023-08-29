"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { useModalContext } from "./ModalContext";

const ContactModal = ({ signType }) => {
	const { signSelected, setSignSelected } = useModalContext();

	const handleModalClose = () => {
		setSignSelected("");
	};

	const formRef = useRef();
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [loading, setLoading] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;

		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setLoading(true);
		emailjs
			.send(
				"service_fx1xixp",
				"template_8gbmr6p",
				{
					from_name: form.name,
					to_name: "Brad",
					from_email: form.email,
					to_email: "bbabines@gmail.com",
					message: form.message,
				},
				"TrfgEA8anlYYaPp71"
			)
			.then(() => {
				setLoading(false);
				alert("Thank you. I will get back to you as soon as possible");
				setForm({ name: "", email: "", message: "" }),
					(error) => {
						setLoading(false);

						console.log(error);

						alert("Oops, something went wrong. Try again.");
					};
			});
	};

	return (
		<div
			className={
				signSelected === signType
					? "max-w-[1500px] max-h-[95vh] w-[500px] min-w-[300px] overflow-auto text-white bg-[#161d26] bg-opacity-90 rounded-2xl"
					: "hidden"
			}
		>
			<div className="relative">
				<div
					className="w-[2em] h-[2em] flex justify-center items-center bg-white text-black rounded-full mt-2 absolute left-[90%] cursor-pointer"
					onClick={handleModalClose}
				>
					X
				</div>

				{/* Information */}
				<div className="py-4 flex flex-col justify-center items-center">
					<h1 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#eab832]">
						Get In Touch
					</h1>
					<h3 className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
						Drop a Line, Start a Journey.
					</h3>
					<div className="mt-8 xl:flex-row flex-col-reverse flex overflow-hidden">
						<div className="flex[0.75] bg-black-100 mb-8 rounded-2xl ">
							<form
								ref={formRef}
								onSubmit={handleSubmit}
								className="min-w-[300px] flex flex-col gap-2"
							>
								<label className="flex flex-col" />
								<span className="text-white font-medium mb-4">Your Name</span>
								<input
									type="text"
									name="name"
									value={form.name}
									onChange={handleChange}
									placeholder="What's your name?"
									className="py-4 px-6 placeholder:text-secondary text-[black] rounded-lg outline-none border-none font-medium"
								/>

								<label className="flex flex-col" />
								<span className="text-white font-medium mb-4">Your Email</span>
								<input
									type="email"
									name="email"
									value={form.email}
									onChange={handleChange}
									placeholder="What's your email?"
									className=" py-4 px-6 placeholder:text-secondary text-[black] rounded-lg outline-none border-none font-medium "
								/>

								<label className="flex flex-col" />
								<span className="text-white font-medium mb-4">
									Your Message
								</span>
								<textarea
									rows="7"
									name="message"
									value={form.message}
									onChange={handleChange}
									placeholder="What do you want to say?"
									className=" py-4 px-6 placeholder:text-secondary text-[black] rounded-lg outline-none border-none font-medium"
								/>
								<button
									type="submit"
									className="bg-[#eab832] mt-4 py-3 px-8 outline-none w-fit text-[black] font-bold shadow-md shadow-primary rounded-xl hover:text-[white]"
								>
									{loading ? "Sending..." : "Send"}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactModal;
