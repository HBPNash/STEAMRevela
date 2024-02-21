import { useNavigate } from 'react-router-dom'
import '../../assets/css/global.css'
// @ts-ignore
import logo from '../../assets/images/logo.svg'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import React from 'react';

const Footer = () => {
    const navigate = useNavigate()
    return <>
        <footer className='flex flex-col items-center lg:flex-row lg:justify-evenly bg-primary text-yellow-300  px-[30px] py-[30px] gap-y-[10px]'>
            <div>
                <p>&copy; {new Date().getFullYear()} STEAMRevela - Todos los derechos reservados.</p>
            </div>
            <div className='flex flex-col items-center'>
                <strong className='text-white'>STEAMRevela</strong>
                <p>Descubre el mundo STEAM con nosotros.</p>
            </div>
            <div className='flex flex-col items-center'>
                <strong className='text-white'>Desarrolladores:</strong>
                <ul style={{ listStyle: 'square', padding: 0 }}>
                    <li>Jorge Israel Aguilera Rueda</li>
                    <li>José Jamin García García</li>
                </ul>
            </div>
            <div className='flex flex-col items-center'>
                <strong className='text-white'>Síguenos:</strong>
                <p className='flex flex-row content-evenly'>
                    <a href="https://www.facebook.com/STEAMRevela" style={{ marginRight: '10px', color: '#fff' }}><FaFacebook /></a>
                    <a href="https://twitter.com/STEAMRevela" style={{ marginRight: '10px', color: '#fff' }}><FaTwitter /></a>
                    <a href="https://instagram.com/STEAMRevela" style={{ marginRight: '10px', color: '#fff' }}><FaInstagram /></a>
                    <a href="https://linkedin.com/company/STEAMRevela" style={{ color: '#fff' }}><FaLinkedin /></a>
                </p>
            </div>

            <img className='size-[150px]' src={logo} alt='Logo STEAMRevela' />
        </footer>
    </>
}

export default Footer