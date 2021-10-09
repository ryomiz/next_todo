import { useAuth } from 'src/hooks/useAuth'

export const LogoutButton: React.VFC = () => {
  const { logout } = useAuth()
  return (
    <button className="btn-primary" onClick={logout}>
      ログアウト
    </button>
  )
}
