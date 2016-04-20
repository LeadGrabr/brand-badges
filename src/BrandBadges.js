import { default as React, createElement, PropTypes } from 'react'
import { Flex } from 'reflexbox'
import { Base, Heading } from 'rebass'

const badgeSize = 280

const Badge = ({ heading, icon, iconSize, width }, { rebass: { colors } }) =>
    <Base
        circle
        my={2}
        p={3}
        style={{
            alignItems: 'center',
            backgroundColor: colors.green,
            display: 'flex',
            color: colors.white,
            height: badgeSize,
            width: badgeSize
        }}
    >
        <Base
            style={{
                margin: 'auto',
                maxWidth: 200,
                textAlign: 'center'
            }}
        >
            <Heading
                level={3}
                mb={2}
            >
                {heading}
            </Heading>
            <Flex justify="center">
                {createElement(icon, { size: iconSize })}
            </Flex>
        </Base>
    </Base>

Badge.defaultProps = {
    iconSize: 80,
}

Badge.propTypes = {
    heading: PropTypes.string.isRequired,
    icon: PropTypes.func.isRequired,
    iconSize: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
}

Badge.contextTypes = {
    breakpoints: PropTypes.object.isRequired,
    rebass: PropTypes.object.isRequired
}

const BrandBadges = ({ badges }) =>
    <Flex
        justify="space-around"
        wrap
    >
        {badges.map((badge, key) =>
            <Badge
                {...badge}
                key={key}
            />
        )}
    </Flex>

BrandBadges.propTypes = {
    badges: PropTypes.array.isRequired
}

export default BrandBadges
