import styled from "styled-components"

export const DashboardContainer = styled.div`
    display: flex;
    min-height: 100vh;
    background: #f8f9fa;
`

export const Sidebar = styled.div`
    width: 250px;
    background: #8D24B4;
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;

    .logo {
        margin-bottom: 30px;
        text-align: center;
        
        h2 {
            margin: 0;
            font-size: 1.5rem;
            font-weight: 600;
        }
    }

    .nav-menu {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .nav-item {
            padding: 15px 20px;
            background: transparent;
            border: none;
            color: white;
            text-align: left;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s ease;

            &:hover {
                background: rgba(255, 255, 255, 0.1);
            }

            &.active {
                background: rgba(255, 255, 255, 0.2);
                font-weight: 600;
            }
        }
    }

    .user-info {
        margin-top: auto;
        padding-top: 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.2);

        p {
            margin: 0 0 15px 0;
            font-size: 0.9rem;
            opacity: 0.9;
        }
    }

    @media (max-width: 768px) {
        width: 200px;
        padding: 15px;
    }
`

export const MainContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

export const Header = styled.div`
    background: white;
    padding: 30px;
    border-bottom: 1px solid #e1e5e9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h1 {
        margin: 0 0 10px 0;
        color: #8D24B4;
        font-size: 2rem;
        font-weight: 600;
    }

    p {
        margin: 0;
        color: #666;
        font-size: 1.1rem;
    }

    @media (max-width: 768px) {
        padding: 20px;
        
        h1 {
            font-size: 1.5rem;
        }
    }
`

export const ContentArea = styled.div`
    flex: 1;
    padding: 30px;
    overflow-y: auto;

    @media (max-width: 768px) {
        padding: 20px;
    }
`

export const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
`

export const StatCard = styled.div`
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-left: 4px solid #8D24B4;

    .stat-number {
        font-size: 2.5rem;
        font-weight: 700;
        color: #8D24B4;
        margin-bottom: 10px;
    }

    .stat-label {
        color: #666;
        font-size: 1rem;
        font-weight: 500;
    }
`

export const ActionButtons = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 30px;

    button {
        padding: 12px 24px;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;

        &.primary {
            background: #8D24B4;
            color: white;

            &:hover {
                background: #7a1f9e;
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(141, 36, 180, 0.3);
            }
        }

        &.secondary {
            background: #6c757d;
            color: white;

            &:hover {
                background: #5a6268;
            }
        }

        &.danger {
            background: #dc3545;
            color: white;

            &:hover {
                background: #c82333;
            }
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        
        button {
            width: 100%;
        }
    }
`

export const LogoutButton = styled.button`
    width: 100%;
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`
