// About page specific JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Animate stats when they come into view
  const stats = document.querySelectorAll(".stat-number");
  const animateStats = () => {
    stats.forEach((stat) => {
      const value = stat.textContent;
      const target = parseInt(value);
      let current = 0;
      const increment = target / 50; // Adjust speed of counting
      const duration = 2000; // 2 second
      const interval = duration / 50;

      const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
          stat.textContent = value;
          clearInterval(counter);
        } else {
          stat.textContent =
            Math.floor(current) + (value.includes("+") ? "+" : "");
        }
      }, interval);
    });
  };

  // Intersection Observer for stats animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateStats();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  const statsSection = document.querySelector(".about-stats");
  if (statsSection) {
    observer.observe(statsSection);
  }

  // Add hover effects to team members
  const teamMembers = document.querySelectorAll(".team-member");
  teamMembers.forEach((member) => {
    member.addEventListener("mouseenter", () => {
      member.style.transform = "translateY(-5px)";
      member.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
    });

    member.addEventListener("mouseleave", () => {
      member.style.transform = "translateY(0)";
      member.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    });

    // Add click handler for social links
    const socialLinks = member.querySelectorAll(".social-link");
    socialLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const platform = link.querySelector("i").className.split("-")[1];
        const name = member.querySelector("h3").textContent;
        console.log(`Opening ${platform} profile for ${name}`);
        // You can implement your own logic here for social media links
      });
    });
  });

  // Add hover effects to value cards
  const valueCards = document.querySelectorAll(".value-card");
  valueCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)";
      card.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
      const icon = card.querySelector(".value-icon");
      icon.style.transform = "scale(1.1)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
      const icon = card.querySelector(".value-icon");
      icon.style.transform = "scale(1)";
    });
  });

  // Add smooth scroll behavior for the page
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
    // Animate stats when they come into view
    const stats = document.querySelectorAll('.stat-number');
    const animateStats = () => {
        stats.forEach(stat => {
            const value = stat.textContent;
            const target = parseInt(value);
            let current = 0;
            const increment = target / 50; // Adjust speed of counting
            const duration = 2000; // 2 seconds
            const interval = duration / 50;

            const counter = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = value;
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(current) + (value.includes('+') ? '+' : '');
                }
            }, interval);
        });
    };

    // Intersection Observer for stats animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // Add hover effects to team members
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', () => {
            member.style.transform = 'translateY(-5px)';
            member.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
        });

        member.addEventListener('mouseleave', () => {
            member.style.transform = 'translateY(0)';
            member.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });

        // Add click handler for social links
        const socialLinks = member.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const platform = link.querySelector('i').className.split('-')[1];
                const name = member.querySelector('h3').textContent;
                console.log(`Opening ${platform} profile for ${name}`);
                // You can implement your own logic here for social media links
            });
        });
    });

    // Add hover effects to value cards
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
            const icon = card.querySelector('.value-icon');
            icon.style.transform = 'scale(1.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            const icon = card.querySelector('.value-icon');
            icon.style.transform = 'scale(1)';
        });
    });

    // Add smooth scroll behavior for the page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 

