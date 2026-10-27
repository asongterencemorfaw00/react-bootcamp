// MODULE 01 — SOLUTION

function Header() {
  return (
    <header>
      <h1>ShopSim Training</h1>
    </header>
  );
}

interface ProfileCardProps {
  name: string;
  title: string;
  bio: string;
  avatar: string;
}

function ProfileCard({ name, title, bio, avatar }: ProfileCardProps) {
  return (
    <div className="card">
      <div className="avatar">{avatar}</div>
      <h2>{name}</h2>
      <p className="title">{title}</p>
      <p className="bio">{bio}</p>
    </div>
  );
}

function Footer() {
  return <footer>ShopSim Training © 2024</footer>;
}

function App() {
  return (
    <div className="container">
      <Header />
      <ProfileCard
        name="Alice Johnson"
        title="Junior Software Engineer"
        bio="I'm learning React and Angular to build the ShopSim e-commerce platform."
        avatar="👩‍💻"
      />
      <Footer />
    </div>
  );
}

export default App;
