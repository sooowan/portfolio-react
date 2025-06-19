import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundLottie from '../img/BackgroundLottie';
const WorkItemBlock = styled.li`
  width: 320px;
  height: 320px;
  @media (max-width: 991px) {
    width: 100%;
    max-width: 320px;
  }
  a {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .work-header {
    position: relative;
    height: 28%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background: var(--df-hover);
    overflow: hidden;
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
    &.lottie {
      background: transparent;
    }
  }
  .work-content {
    position: relative;
    flex: auto;
    background: var(--df-bg);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 82px 24px 24px 24px;
    font-size: 1.2rem;
    line-height: 1.4rem;
    .title-box {
      position: absolute;
      display: flex;
      flex-direction: column;
      left: 24px;
      top: -2rem;
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
    .tag-list {
      margin-top: 12px;
      display: flex;
      gap: 8px;
      font-size: 1rem;
      line-height: 1.2rem;
      flex-wrap: wrap;
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
        <div className={classNames('work-header', style ? style : '')}>
          {style === 'lottie' && <BackgroundLottie />}
        </div>
        <div className="work-content">
          <div className="title-box">
            <span className="title-ico">{title.ico}</span>
            <h4 className="title-text">{title.text}</h4>
          </div>
          <p dangerouslySetInnerHTML={{ __html: desc }} />
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
