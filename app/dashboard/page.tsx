"use client";
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import styles from './dashboard.module.css';

export default function Dashboard() {
  const { user, isAuthenticated, loading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/auth/signin');
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>Welcome to Your Dashboard</h1>
        <p>Hello, {user?.name}! Here's your personalized dashboard.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.card}>
          <h3>Account Information</h3>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.label}>Name:</span>
              <span className={styles.value}>{user?.name}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Email:</span>
              <span className={styles.value}>{user?.email}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>User ID:</span>
              <span className={styles.value}>{user?.id}</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h3>Quick Actions</h3>
          <div className={styles.actionGrid}>
            <button className={styles.actionBtn}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
              </svg>
              View Orders
            </button>
            <button className={styles.actionBtn}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              Profile Settings
            </button>
            <button className={styles.actionBtn}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Favorites
            </button>
            <button className={styles.actionBtn}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
              Support
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <h3>Recent Activity</h3>
          <div className={styles.activityList}>
            <div className={styles.activityItem}>
              <div className={styles.activityIcon}>📦</div>
              <div className={styles.activityContent}>
                <p className={styles.activityTitle}>Order #12345 placed</p>
                <p className={styles.activityTime}>2 hours ago</p>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityIcon}>✅</div>
              <div className={styles.activityContent}>
                <p className={styles.activityTitle}>Order #12344 delivered</p>
                <p className={styles.activityTime}>1 day ago</p>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityIcon}>👤</div>
              <div className={styles.activityContent}>
                <p className={styles.activityTitle}>Profile updated</p>
                <p className={styles.activityTime}>3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 