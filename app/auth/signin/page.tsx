"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import styles from './auth.module.css';

export default function SignIn() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login, signup, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.classList.add('active');
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      e.target.classList.remove('active');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (isSignUpMode) {
        await signup(formData.name, formData.email, formData.password);
      } else {
        await login(formData.email, formData.password);
      }
      router.push('/dashboard');
    } catch {
      // setError('Authentication failed. Please try again.'); // This line was removed
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <div className={styles.innerBox}>
          <div className={styles.formsWrap}>
            {isSignUpMode ? (
              <form onSubmit={handleSubmit} className={styles.signUpForm}>
                <div className={styles.logo}>
                  <Image
                    src="/Images/Logo 1.png"
                    alt="Logo"
                    width={200}
                    height={100}
                    className={styles.logoImage}
                  />
                </div>
                <div className={styles.heading}>
                  <h2>Let&apos;s Get Started!</h2>
                  <h6>Already have an account?</h6>
                  <button
                    type="button"
                    className={styles.toggle}
                    onClick={() => setIsSignUpMode(false)}
                  >
                    Sign in
                  </button>
                </div>
                <div className={styles.actualForm}>
                  <div className={styles.inputWrap}>
                    <input
                      type="text"
                      name="name"
                      minLength={4}
                      autoComplete="off"
                      required
                      className={styles.inputField}
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      placeholder=" "
                    />
                    <label>Name</label>
                  </div>
                  <div className={styles.inputWrap}>
                    <input
                      type="email"
                      name="email"
                      autoComplete="off"
                      required
                      className={styles.inputField}
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      placeholder=" "
                    />
                    <label>Email</label>
                  </div>
                  <div className={styles.inputWrap}>
                    <input
                      type="password"
                      name="password"
                      minLength={8}
                      autoComplete="off"
                      required
                      className={styles.inputField}
                      value={formData.password}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      placeholder=" "
                    />
                    <label>Password</label>
                  </div>
                  <button type="submit" className={styles.signBtn} disabled={isSubmitting}>
                    {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                  </button>
                  <p className={styles.text}>
                    By signing up, I agree to the <Link href="#" className={styles.link}>Terms of Services</Link> and <Link href="#" className={styles.link}>Privacy Policy</Link>
                  </p>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className={styles.signInForm}>
                <div className={styles.logo}>
                  <Image
                    src="/Images/Logo 1.png"
                    alt="Logo"
                    width={200}
                    height={100}
                    className={styles.logoImage}
                  />
                </div>
                <div className={styles.heading}>
                  <h2>Welcome Back!</h2>
                  <h6>Not registered yet?</h6>
                  <button
                    type="button"
                    className={styles.toggle}
                    onClick={() => setIsSignUpMode(true)}
                  >
                    Sign up
                  </button>
                </div>
                <div className={styles.actualForm}>
                  <div className={styles.inputWrap}>
                    <input
                      type="email"
                      name="email"
                      autoComplete="off"
                      required
                      className={styles.inputField}
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      placeholder=" "
                    />
                    <label>Email</label>
                  </div>
                  <div className={styles.inputWrap}>
                    <input
                      type="password"
                      name="password"
                      minLength={4}
                      autoComplete="off"
                      required
                      className={styles.inputField}
                      value={formData.password}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      placeholder=" "
                    />
                    <label>Password</label>
                  </div>
                  <button type="submit" className={styles.signBtn} disabled={isSubmitting}>
                    {isSubmitting ? 'Signing In...' : 'Sign In'}
                  </button>
                  <p className={styles.text}>
                    Forgot your password?
                    <Link href="#" className={styles.link}>Get Help</Link>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 