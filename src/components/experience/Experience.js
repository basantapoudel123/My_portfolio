import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./experience.css";

const Experience = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div
            className={darkMode ? "experience dark" : "experience"}
            id="experienceId"
        >
            <div className="e-header">
                <h1>Experience</h1>
                <p>
                    My professional journey as a Software Engineer building scalable,
                    real-time, and modern web applications.
                </p>
            </div>

            <div className="timeline">

                {/* ITEM 1 */}
                <div className="timeline-item">
                    <div className="timeline-dot"></div>

                    <div className="timeline-content">
                        <span className="timeline-date">07/2025 - 04/2026</span>

                        <h2>Software Engineer</h2>

                        <h3>Smart Ideas Pvt. Ltd. (Hamro Patro)</h3>

                        <ul>
                            <li>
                                Developed and maintained Jyotish Consultant Site,
                                Election CMS, and Payment CMS.
                            </li>

                            <li>
                                Built real-time features and integrated multiple
                                payment systems.
                            </li>

                            <li>
                                Designed scalable frontend architectures and managed
                                transaction workflows.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ITEM 2 */}
                <div className="timeline-item">
                    <div className="timeline-dot"></div>

                    <div className="timeline-content">
                        <span className="timeline-date">02/2023 - 07/2025</span>

                        <h2>Associate Software Engineer</h2>

                        <h3>Smart Ideas Pvt. Ltd. (Hamro Patro)</h3>

                        <ul>
                            <li>
                                Worked on E-commerce platform, CMS, and Order
                                Fulfillment CMS.
                            </li>

                            <li>
                                Developed dynamic Page Builder systems for flexible
                                content management.
                            </li>

                            <li>
                                Built product, category, coupon, and order
                                management systems.
                            </li>

                            <li>
                                Managed full order lifecycle from placement
                                to fulfillment.
                            </li>

                            <li>
                                Contributed to Kundali SDK and Jyotish platforms.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ITEM 3 */}
                <div className="timeline-item">
                    <div className="timeline-dot"></div>

                    <div className="timeline-content">
                        <span className="timeline-date">11/2022 - 02/2023</span>

                        <h2>Frontend Intern</h2>

                        <h3>Smart Ideas Pvt. Ltd. (Hamro Patro)</h3>

                        <ul>
                            <li>
                                Contributed to Ask Money feature in Hamro Pay.
                            </li>

                            <li>
                                Implemented request lifecycle including send,
                                remind, accept/reject, and settlement.
                            </li>

                            <li>
                                Built UI for payable and receivable tracking.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Experience;