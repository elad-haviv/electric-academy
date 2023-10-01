import React, { useState } from "react";
import classes from "./MasterLayout.module.css";
import { SignOutButton } from "@clerk/clerk-react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const navItem = (key, icon, text, path) => ({
    key,
    icon,
    text,
    path,
});

const navMenu = [
    navItem("home", "🏠", "ראשי", "/"),
    navItem("questions", "❓", "מאגר השאלות", "/questions"),
    navItem("sim", "▶️", "בחנו את עצמכם", "/simulator"),
    navItem("learn", "📖", "פורטל הידע", "/learn"),
    navItem("profile", "⚙️", "הגדרות", "/profile"),
];

function MasterLayout() {
    const [active, setActive] = useState(navMenu[0].key);
    return (
        <div className={classes["wrapper"]}>
            <aside className={classes["nav-wrapper"]}>
                <nav className={classes["nav"]}>
                    <a
                        href="#"
                        className={`${classes["nav-link"]} ${classes["nav-brand"]}`}
                    >
                        <span className={classes["nav-item-icon"]}>⚡</span>
                        <small className={classes["nav-item-text"]}>
                            האקדמיה לחשמל
                        </small>
                    </a>
                    {navMenu.map((item) => (
                        <Link
                            to={item.path}
                            onClick={() => setActive(item.key)}
                            key={item.key}
                            className={`${classes["nav-link"]} ${
                                active === item.key ? classes["active"] : ""
                            }`}
                        >
                            <span className={classes["nav-item-icon"]}>
                                {item.icon}
                            </span>
                            <small className={classes["nav-item-text"]}>
                                {item.text}
                            </small>
                        </Link>
                    ))}
                </nav>
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default MasterLayout;
