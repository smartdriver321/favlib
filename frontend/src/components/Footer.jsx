import { Link } from 'react-router'

const Footer = () => {
	return (
		<div className='text-[#252422] bg-[#f5f5f5] px-4 md:px-12 md:text-lg'>
			<h3 className='border-t border-[#252422] pt-4 pb-6 italic'>
				Designed and developed by{' '}
				<Link
					to={'https://zgboportfolio.vercel.app'}
					target='_blank'
					className='text-[#944424]'
				>
					Emmanuel Ezeigbo.
				</Link>
			</h3>
		</div>
	)
}

export default Footer
