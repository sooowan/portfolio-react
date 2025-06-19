import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const WorkItemBlock = styled.li`
  a {
    position: relative;
    width: 280px;
    height: 280px;
    display: flex;
    flex-direction: column;
  }
  .work-title {
    position: relative;
    height: 32%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background: var(--df-hover);
    &.gradient {
      background: linear-gradient(
        100deg,
        rgba(214, 180, 237, 1) 0%,
        rgba(46, 111, 181, 1) 35%,
        rgba(253, 29, 29, 1) 120%
      );
    }
    &.solid_indigo {
      background: var(--oc-indigo-5);
    }
    .title-box {
      position: absolute;
      display: flex;
      flex-direction: column;
      left: 24px;
      top: calc(100% - 2rem);
      width: calc(100% - 40px);
      gap: 12px;
    }
    .title-ico {
      font-size: 4rem;
      display: inline-flex;
      align-items: center;
      width: 4rem;
      height: 4rem;
    }
    .title-text {
      font-size: 1.3rem;
      line-height: 1.8rem;
      word-break: break-all;
    }
  }
  .work-content {
    flex: auto;
    background: var(--df-bg);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 82px 24px 24px 24px;
    font-size: 1.1rem;
    .tag-list {
      margin-top: 12px;
      display: flex;
      gap: 10px;
      font-size: 1rem;
    }
    .tag-list,
    p {
      opacity: 0.8;
    }
  }
`;
export default function WorkItem({ work }) {
  const { link, title, desc, tags, style } = work;
  return (
    <WorkItemBlock>
      <Link to={link} target="_blank">
        <div className={classNames('work-title', style ? style : '')}>
          <div className="title-box">
            <span className="title-ico">{title.ico}</span>
            <h4 className="title-text">{title.text}</h4>
          </div>
        </div>
        <div className="work-content">
          <p>{desc}</p>
          <div className="tag-list">
            {tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    </WorkItemBlock>
  );
}
